import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { Page1Component } from './part1/page1/page1.component';
//import { Page2Component } from './part1/page2/page2.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

export const routes: Routes = [
  //{ path: 'p1', component: Page1Component, title: 'DI與Service' },
  //{ path: 'p2', component: Page2Component, title: 'page2' },
  { path: 'part1', component: Part1Component, title: 'DI與Service' },
  { path: 'part2', component: Part2Component, title: '使用Service存取HTTPClien' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
