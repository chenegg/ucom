import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

export const routes: Routes = [
  { path: 'p1', component: Page1Component, title: 'page1' },
  { path: 'p2', component: Page2Component, title: 'page2' },
  { path: 'p3', component: Page3Component, title: 'page3' },
  { path: 'p4', component: Page4Component, title: 'page4' },
  { path: 'p5', component: Page5Component, title: 'page5' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
