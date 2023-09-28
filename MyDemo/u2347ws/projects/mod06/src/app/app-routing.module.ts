import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
 // { path: 'p1', component: Page1Component, title: 'page1' },
 // { path: 'p2', component: Page2Component, title: 'page2' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
