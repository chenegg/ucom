import {
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'CheckStock',
  templateUrl: './check-stock.component.html',
  styles: [],
})
export class CheckStockComponent implements OnInit {
  @Input() Stock: number = 0;

  @Input() QTY = 0;

  @ContentChildren('span') spans: any;

  info = '';

  lower = false;

  ngOnInit(): void {}

  // ngOnChanges() {
  //   this.lower = this.Stock < this.QTY;
  //   this.info = this.lower ? `低於庫存,目前只有 ${this.Stock}` : '';
  //   console.log('ngOnChanges' + this.Stock);
  // }

  ngDoCheck() {
    this.lower = this.Stock < this.QTY;
    this.info = this.lower ? `低於庫存,目前只有 ${this.Stock}` : '';
    console.log('ngDoCheck' + this.Stock);
  }

  GetStock() {
    this.Stock = 20;
    console.log(this.Stock);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    this.spans.forEach((element: any) => {
      console.log('\t', element);
    });
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    this.spans.forEach((element: any) => {
      console.log('\t', element);
    });
  }
}
