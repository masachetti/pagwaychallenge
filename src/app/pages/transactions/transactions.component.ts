import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginateInfo } from 'src/types/paginated';
import { Transaction } from 'src/types/transaction';
import { Balance } from 'src/types/balance';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit {
  page: number;
  perPage: number;
  sort: string;
  filter: number;
  paginateInfo: PaginateInfo | undefined;
  transactionsData: Array<Transaction> = [];
  balanceData: Balance | undefined;

  constructor(
    private transaction: TransactionService,
    private route: ActivatedRoute,
    private router: Router,
    private balance: BalanceService
  ) {
    this.page = 1;
    this.perPage = 10;
    this.sort = '';
    this.filter = 1;
  }

  ngOnInit(): void {
    this.balance.getBalance().subscribe((data) => (this.balanceData = data));
    this.route.queryParams.subscribe((params) => {
      this.page = parseInt(params['page'] ?? this.page);
      this.perPage = parseInt(params['per_page'] ?? this.perPage);
      this.sort = params['sort'] ?? '';
      this.filter = parseInt(params['filter'] ?? this.filter);
      this.transactionsData = [];
      this.transaction
        .getTransactions(this.page, this.perPage, this.sort, this.filter)
        .subscribe((data) => {
          const { data: _data, ..._paginateInfo } = data;
          this.transactionsData = _data;
          this.paginateInfo = _paginateInfo;
        });
    });
  }

  changeFilter(value: string) {
    this.router.navigate(['/transacoes'], {
      queryParams: { filter: parseInt(value) },
      queryParamsHandling: 'merge',
    });
  }
}
