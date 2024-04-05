import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { PaginateInfo } from 'src/types/paginated';
import { Transaction } from 'src/types/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  page: number;
  perPage: number;
  paginateInfo: PaginateInfo | undefined;
  transactions: Array<Transaction> = [];

  constructor(
    private transaction: TransactionService,
    private route: ActivatedRoute
  ) {
    this.page = 1;
    this.perPage = 10;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.page = parseInt(params['page'] ?? this.page);
      this.perPage = parseInt(params['per_page'] ?? this.perPage);
      this.transactions = [];
      this.transaction
        .getTransactions(this.page, this.perPage)
        .subscribe((data) => {
          const { data: _data, ..._paginateInfo } = data;
          this.transactions = _data;
          this.paginateInfo = _paginateInfo;
        });
    });
  }
}
