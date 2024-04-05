import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/types/transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
})
export class TransactionsTableComponent implements OnInit {
  // @Input() transactions: Array<Transaction> | undefined
  @Input()
  get transactions(): Array<Transaction> {
    return this._transactions;
  }
  set transactions(transactions: Array<Transaction>) {
    console.log(
      transactions.map((t) => {
        if (t.recebiveis.length) {
          return new Date(t.recebiveis[0].dataPagamento);
        }
        return null;
      })
    );
    this._transactions = transactions;
  }
  private _transactions: Array<Transaction> = [];

  constructor() {}
  ngOnInit(): void {}
}
