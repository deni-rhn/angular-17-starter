import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DEFAULT_LIST_PARAMS } from 'src/app/core/common/constant';
import { ProductService } from 'src/app/core/services/product.service';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ICommonParams } from 'src/app/shared/models/params/icommon-params';
import { ICourse, IProduct } from 'src/app/shared/models/response/iproduct';
import { ProductFilterComponent } from '../../components/product-filter/product-filter.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ProductFilterComponent,
    CardComponent
  ],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit, OnDestroy {
  callApiSubs$: Subscription = new Subscription();
  routeSubs$: Subscription = new Subscription();
  params: ICommonParams = DEFAULT_LIST_PARAMS;
  productLists: ICourse[] = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSubs$ = this.activatedRoute.queryParams.subscribe((qParams: any) => {
      if (qParams && qParams.categoryId) {
        const qParam: ICommonParams = {
          ...this.params,
          categoriesId: qParams.categoryId
        };
        this.getProducts(qParam);
      } else {
        this.getProducts(this.params);
      }
    });
  }

  ngOnDestroy(): void {
    this.callApiSubs$?.unsubscribe();
    this.routeSubs$?.unsubscribe();
  }

  getProducts(params: ICommonParams) {
    const self = this;
    this.callApiSubs$ = this.productService.getProducts(params).subscribe({
      next(result: IProduct | undefined) {
        console.log(result)
        if (result) {
          self.productLists = result?.course;
        }
      },
      error(error: HttpErrorResponse) {
        // error handler
      }
    })
  }
}
