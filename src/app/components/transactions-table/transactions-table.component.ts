import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/types/transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
})
export class TransactionsTableComponent implements OnInit {
  @Input() transactions: Array<Transaction> = [];
  @Input() currentSort: string = '';

  private currentSortVariable = '';
  private currentSortOrder = 'asc';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentSortVariable = this.currentSort.slice(
      this.currentSort.startsWith('-') ? 1 : 0
    );
    this.currentSortOrder = this.currentSort.startsWith('-') ? 'desc' : 'asc';
  }

  changeSort(variable: string) {
    let nextSort = variable;
    if (variable === this.currentSortVariable) {
      if (this.currentSortOrder === 'desc') nextSort = '';
      else nextSort = '-' + variable;
    }
    this.router.navigate(['/transacoes'], {
      queryParams: { sort: nextSort },
      queryParamsHandling: 'merge',
    });
  }

  shouldRenderArrow(variable: string, sortOrder: 'asc' | 'desc') {
    return (
      this.currentSortVariable !== variable ||
      this.currentSortOrder === sortOrder
    );
  }
}
