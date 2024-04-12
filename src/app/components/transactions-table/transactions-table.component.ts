import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HowToSort } from 'src/types/sorting';
import { Transaction } from 'src/types/transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
})
export class TransactionsTableComponent implements OnInit {
  @Input() transactions: Array<Transaction> = [];
  @Output() sort = new EventEmitter<HowToSort>();

  howToSort: HowToSort = [null, null];

  constructor() {}
  ngOnInit(): void {}

  changeSort(variable: string) {
    console.log(this.howToSort);
    if (this.howToSort[0] === variable) {
      switch (this.howToSort[1]) {
        case 'asc':
          this.howToSort[1] = 'desc';
          break;
        case 'desc':
          this.howToSort = [null, null];
          break;
      }
      this.sort.emit(this.howToSort);
      return;
    }
    this.howToSort = [variable, 'asc'];
    this.sort.emit(this.howToSort);
  }

  shouldRenderArrow(variable: string, sortOrder: 'asc' | 'desc') {
    return this.howToSort[0] !== variable || this.howToSort[1] === sortOrder;
  }
}
