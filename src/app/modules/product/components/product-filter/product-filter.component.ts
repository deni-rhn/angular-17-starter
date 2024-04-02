import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilterService } from 'src/app/core/services/filter.service';
import { FilterIconComponent } from 'src/app/shared/components/icons/filter-icon/filter-icon.component';
import { IFilter } from 'src/app/shared/models/response/ifilter';
import { Result } from 'src/app/shared/models/result';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FilterIconComponent
  ],
  providers: [FilterService]
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  filterData: IFilter[] | undefined = undefined;
  selectedCategory!: number;
  isError: boolean = false;
  subs$: Subscription = new Subscription();

  constructor(
    private filterService: FilterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchCategory();
  }

  ngOnDestroy(): void {
    this.subs$?.unsubscribe();
  }

  fetchCategory() {
    const self = this;
    this.subs$ = this.filterService.getMasterFilter().subscribe({
      next(result: Result<IFilter[]>) {
        self.filterData = result.data;
        if (self.filterData) {
          self.selectedCategory = self.filterData[0].categoriesId;
        }
      },
      error(error: HttpErrorResponse) {
        self.isError = true;
      }
    });
  }

  onChangeCategory(id: number) {
    this.selectedCategory = id;
    this.router.navigate(['.'], {
        queryParamsHandling: 'merge',
        queryParams: {
          categoryId: id
        }
      });
  }
}
