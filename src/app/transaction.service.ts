import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginated } from 'src/types/paginated';
import { Transaction } from 'src/types/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl = "http://localhost:3000/"
  transcationsUrl = this.baseUrl + "transacoes"

  constructor(private http: HttpClient) {
  }

  getTransactions(page: number, itemsByPage: number = 10) {
    return this.http.get<Paginated<Transaction>>(this.transcationsUrl, {
      params: {
        _page: page,
        _per_page: itemsByPage
      }
    })
  }
}
