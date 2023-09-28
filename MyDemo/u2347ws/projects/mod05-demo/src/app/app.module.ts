import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LefeCycleComponent } from './left-cycle/left-cycle.component';

@NgModule({
  declarations: [AppComponent, LefeCycleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
