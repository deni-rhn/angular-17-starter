import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterService } from 'src/app/core/services/filter.service';
import { ProductListComponent } from './page/product-list/product-list.component';

const routes: Routes = [
  {
    component: ProductListComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    FilterService
  ]
})
export class ProductRoutingModule { }
