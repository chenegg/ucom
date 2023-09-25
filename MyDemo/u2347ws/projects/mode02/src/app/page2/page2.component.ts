import { Component, OnInit } from '@angular/core';
import { Picture, picture } from '../Picture';

@Component({
  selector: 'kgib-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  public pictrue = picture;
  public pictures: Picture[] = [];
  constructor() {
    this.pictures = [
      this.pictrue,
      new Picture(
        1,
        'https://www.rightclickcomputersolutions.com/office-2016-vs-office-365-which-is-better-for-your-business/',
        'gmail',
        'egg'
      ),
      new Picture(
        2,
        'https://www.rightclickcomputersolutions.com/office-2016-vs-office-365-which-is-better-for-your-business/',
        'gmail',
        'egg'
      ),
    ];
  }

  ngOnInit() {}
}
