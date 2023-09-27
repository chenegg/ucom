import { Component } from '@angular/core';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'mod04';
  routes = routes;
  mySearch: string = '';
  isTouch: boolean = false;
  isFound: boolean = false;
  resultStyle = {};

  onTextChange(search: string) {
    this.isTouch = true;
    this.isFound = search.length > 3;
    this.resultStyle = {
      border: this.isFound ? 'solid 3px blue' : 'solid 3px red',
      color: this.isFound ? 'black' : 'red',
      'background-color': this.isFound ? 'yellow' : 'white',
    };

    console.log(search + this.isFound);
  }
}
