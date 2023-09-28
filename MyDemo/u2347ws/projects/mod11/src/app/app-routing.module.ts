import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: 'promotion', component: PromotionComponent },
      { path: 'popular', component: PopularComponent },
      { path: ':id', component: ProductDetailComponent },
    ],
  },
  // { path: 'productDetail', component: ProductDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
