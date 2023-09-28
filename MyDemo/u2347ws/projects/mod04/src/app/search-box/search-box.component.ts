import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'searchBox',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent {
  @Input() searchText: string = '';
  @Output() searchTextChange = new EventEmitter<string>();

  onSearch(search: string) {
    this.searchText = search;
    console.log(this.searchText);
    this.searchTextChange.emit(this.searchText);
  }
}
