import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaginateInfo } from 'src/types/paginated';
import { CS } from 'src/utils/cs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent extends CS implements OnChanges {
  @Input() paginateInfo: PaginateInfo | undefined;
  @Input() pageNumber: number | undefined;

  pages: Array<number> = [];
  shouldRenderFirstButton = false;
  shouldRenderLastButton = false;

  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('paginateInfo' in changes) {
      const info = changes['paginateInfo'].currentValue as PaginateInfo;
      if (info) {
        const currentPage = this.pageNumber ?? 1;
        this.pages = [];
        Array.from({ length: 5 }, (_, i) => i - 2).forEach((v) => {
          const pNumber = currentPage + v;
          if (pNumber >= info.first && pNumber <= info.last) {
            this.pages.push(pNumber);
          }
        });

        this.shouldRenderFirstButton = !this.pages.includes(info.first);
        this.shouldRenderLastButton = !this.pages.includes(info.last);
      }
    }
  }
}
