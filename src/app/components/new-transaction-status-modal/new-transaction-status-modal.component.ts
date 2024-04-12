import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewTransactionResponseStatus } from 'src/types/transaction';

@Component({
  selector: 'app-new-transaction-status-modal',
  templateUrl: './new-transaction-status-modal.component.html',
  styleUrls: ['./new-transaction-status-modal.component.css'],
})
export class NewTransactionStatusModalComponent implements OnInit {
  @Input() status: NewTransactionResponseStatus = 'idle';
  @Output() reset = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
