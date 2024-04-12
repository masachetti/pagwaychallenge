import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/types/transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
})
export class TransactionsTableComponent implements OnInit {
  @Input() transactions: Array<Transaction> = [];

  constructor() {}
  ngOnInit(): void {}
}
