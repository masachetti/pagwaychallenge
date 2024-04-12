import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { NewTransactionResponseStatus } from 'src/types/transaction';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
})
export class NewTransactionComponent implements OnInit {
  transactionForm = this.fb.group({
    transactionValue: [0.0, [Validators.required, Validators.min(1)]],
    description: ['', Validators.required],
    cardName: ['', Validators.required],
    cardNumber: ['', Validators.required],
    cardMonth: [
      '',
      [Validators.required, Validators.min(1), Validators.max(12)],
    ],
    cardYear: [
      '',
      [Validators.required, Validators.min(new Date().getFullYear())],
    ],
    cardCode: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
    ],
  });

  userTriedToSubmit = false;
  submitted = false;
  responseStatus: NewTransactionResponseStatus = 'idle';

  get transactionValue() {
    return this.transactionForm.get('transactionValue') as FormControl;
  }
  get description() {
    return this.transactionForm.get('description') as AbstractControl;
  }
  get cardName() {
    return this.transactionForm.get('cardName') as AbstractControl;
  }
  get cardNumber() {
    return this.transactionForm.get('cardNumber') as AbstractControl;
  }
  get cardMonth() {
    return this.transactionForm.get('cardMonth') as AbstractControl;
  }
  get cardYear() {
    return this.transactionForm.get('cardYear') as AbstractControl;
  }
  get cardCode() {
    return this.transactionForm.get('cardCode') as AbstractControl;
  }

  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    private transactions: TransactionService
  ) {}

  onSubmit() {
    this.userTriedToSubmit = true;
    if (this.transactionForm.valid) {
      this.submitted = true;

      this.transactions
        .newTransaction({
          valor: this.transactionValue.value * 100,
          descricao: this.description.value,
          nomePortadorCartao: this.cardName.value,
          codigoSegurancaCartao: this.cardCode.value,
          numeroCartao: this.cardNumber.value,
          validadeCartao: `${this.cardMonth.value}/${this.cardYear.value}`,
          dataTransacao: ~~(new Date().getTime() / 1000),
        })
        .subscribe((resp) => {
          if (resp.status === 201) {
            this.responseStatus = 'success';
          }
          if (resp.status === 400) {
            this.responseStatus = 'error';
          }
        });
    }
  }

  resetForm() {
    this.submitted = false;
    this.userTriedToSubmit = false;
    this.responseStatus = 'idle';
    this.transactionForm.reset();
    this.transactionForm.get('transactionValue')?.setValue(0);
  }
}
