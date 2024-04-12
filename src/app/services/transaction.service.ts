import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Paginated } from 'src/types/paginated';
import { NewTransaction, Transaction } from 'src/types/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  baseUrl = 'http://localhost:3000/transacoes';

  constructor(private http: HttpClient) {}

  getTransactions(page: number, itemsByPage: number = 10) {
    return this.http
      .get<Paginated<Transaction>>(this.baseUrl, {
        params: {
          _page: page,
          _per_page: itemsByPage,
        },
      })
      .pipe(delay(500));
  }

  newTransaction(transactionData: NewTransaction) {
    if (transactionData.descricao === 'error test') {
      const obs = of({ status: 400, statusText: 'Bad Request' });
      return obs.pipe(delay(1500));
    }

    return this.http
      .post(this.baseUrl, transactionData, {
        headers: {
          'Content-Type': 'application/json',
        },
        observe: 'response',
      })
      .pipe(delay(1500));
  }
}
