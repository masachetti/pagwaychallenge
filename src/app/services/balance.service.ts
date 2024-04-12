import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators';
import { Balance } from 'src/types/balance';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  baseUrl = 'http://localhost:3000/';
  balanceUrl = this.baseUrl + 'saldo';

  constructor(private http: HttpClient) {}

  getBalance() {
    return this.http.get<Balance>(this.balanceUrl).pipe(delay(500));
  }
}
