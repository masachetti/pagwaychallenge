import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() perPage: number | undefined;

  pages: Array<number> = [];
  shouldRenderFirstButton = false;
  shouldRenderLastButton = false;

  perPageOptions: Array<number> = [100, 50, 30, 10];

  constructor(private router: Router) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
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
    if ('perPage' in changes) {
      const _perPage = changes['perPage'].currentValue;
      if (typeof _perPage === 'number') {
        if (!this.perPageOptions.includes(_perPage)) {
          this.perPageOptions = [...this.perPageOptions, _perPage].sort(
            (a, b) => a - b
          );
        }
      }
    }
  }

  changePerPageQueryParameter(value: string) {
    this.router.navigate(['/transacoes'], {
      queryParams: { per_page: parseInt(value) },
      queryParamsHandling: 'merge',
    });
  }
}
