import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = '購物車';
  QTY: number = 12;
  Stock: number = 10;
  vMoney:number = 382140;

  @ViewChild('title1') h1: ElementRef | any;

  ngAfterViewInit() {
    console.log('ngAfterViewInit' + this.h1.nativeElement);
    let title1 = this.h1.nativeElement;
    title1.addEventListener(
      'click',
      () => (title1.innerHTML = 'title1 + click event')
    );
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', this.h1.nativeElement);
  }
}
