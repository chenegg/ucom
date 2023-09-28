import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckStockComponent } from './check-stock/check-stock.component';
import { FormsModule } from '@angular/forms';
import { InTheBoxDirective } from './in-the-box.directive';
import { USD2TWDPipe } from './usd2-twd.pipe';

@NgModule({
  declarations: [AppComponent, CheckStockComponent, InTheBoxDirective, USD2TWDPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
