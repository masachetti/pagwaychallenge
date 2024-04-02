import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaginateInfo } from 'src/types/paginated';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {

  @Input() paginateInfo: PaginateInfo | undefined;

  pages: Array<number> | undefined;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const info = changes['paginateInfo'].currentValue
    if (info) {
      this.pages = Array.from({ length: info.pages }, (_, i) => i + 1)
    }
  }

}
