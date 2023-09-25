import { Component } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styles: [],
})
export class Page4Component {
  onClick(event: Event, element: string) {
    console.log(element);
    console.log('>' + event.target);
    console.log('>>' + event.currentTarget);
    //alert('Hello' + element);
  }

  onClick3(event: Event, element: string) {
    console.log(element);
    console.log('>' + event.target);
    console.log('>>' + event.currentTarget);
    event.preventDefault();
    event.stopPropagation();
  }

  result: string = '';

  onchange(event: Event) {
    let selectElement: HTMLSelectElement = <HTMLSelectElement>event.target;
    console.log(selectElement.value);
    this.result = selectElement.value;
  }
}
