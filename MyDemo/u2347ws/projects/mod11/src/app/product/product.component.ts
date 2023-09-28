import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [],
})
export class ProductComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  GoProd2(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute });
  }

  GoProd3(id: number) {
    this.router.navigateByUrl(`/product/${id}`);
  }
}
