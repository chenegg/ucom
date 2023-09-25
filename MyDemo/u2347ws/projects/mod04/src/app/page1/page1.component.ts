import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [],
})
export class Page1Component {
  title = '屬性綁定';
  picURL =
    'https://www.rightclickcomputersolutions.com/office-2016-vs-office-365-which-is-better-for-your-business/';

  isDisable = true;
}
