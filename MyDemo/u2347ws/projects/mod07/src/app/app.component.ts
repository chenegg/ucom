import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'mod07';

  capacity = ['5','10','20','30','40']
  rentRoom = {name:'',number:'',extNo:'',startDate:'',endDate:''}
}
