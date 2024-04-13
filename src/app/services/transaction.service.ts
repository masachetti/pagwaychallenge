import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { Paginated } from 'src/types/paginated';
import { NewTransaction, Transaction } from 'src/types/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  baseUrl = 'http://localhost:3000/transacoes';

  constructor(private http: HttpClient) {}

  getTransactions(
    page: number,
    itemsByPage: number = 10,
    sort: string,
    filter: number
  ) {
    let sortParam = sort ? sort : '-dataTransacao';
    const filterParams: Record<string, number | string> = {};
    if (filter === 2) filterParams.possuiRecebivel = 0;
    if (filter > 2) filterParams.possuiRecebivel = 1;
    if (filter === 4) filterParams.statusRecebivel = 'Pago';
    if (filter === 5) filterParams.statusRecebivel = 'Pendente';
    return this.http
      .get<Paginated<Transaction>>(this.baseUrl, {
        params: {
          _page: page,
          _per_page: itemsByPage,
          _sort: sortParam,
          ...filterParams,
        },
      })
      .pipe(delay(500));
  }

  private generateReceivable(valor: number) {
    const possuiRecebivel = Boolean(~~(Math.random() * 2));
    let statusRecebivel = null;
    let dataPagamentoRecebivel = null;
    let valorRecebivel = null;
    if (possuiRecebivel) {
      statusRecebivel = ['Pendente', 'Pago'][~~(Math.random() * 2)];
      const deltaTimeStamp = ~~(Math.random() * 31536000);
      dataPagamentoRecebivel = ~~(
        new Date().getTime() / 1000 +
        (statusRecebivel === 'Pendente' ? deltaTimeStamp : -deltaTimeStamp)
      );

      valorRecebivel = ~~(valor * 0.05);
    }
    return {
      possuiRecebivel: possuiRecebivel,
      statusRecebivel: statusRecebivel,
      dataPagamentoRecebivel: dataPagamentoRecebivel,
      valorRecebivel: valorRecebivel,
    };
  }

  newTransaction(transactionData: NewTransaction) {
    if (transactionData.descricao === 'error test') {
      const obs = of({ status: 400, statusText: 'Bad Request' });
      return obs.pipe(delay(1500));
    }

    const mockedReceivable = this.generateReceivable(transactionData.valor);
    return this.http
      .post(
        this.baseUrl,
        { ...transactionData, ...mockedReceivable },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          observe: 'response',
        }
      )
      .pipe(delay(1500));
  }
}
