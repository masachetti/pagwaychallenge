import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewTransactionComponent } from './pages/new-transaction/new-transaction.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { ButtonComponent } from './components/button/button.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import {
  matChevronLeft as MatChevronLeft,
  matChevronRight as MatChevronRight,
  matCheck as MatCheck,
  matClose as MatClose,
} from '@ng-icons/material-icons/baseline';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MonetaryInputComponent } from './components/monetary-input/monetary-input.component';
import { NewTransactionStatusModalComponent } from './components/new-transaction-status-modal/new-transaction-status-modal.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    NewTransactionComponent,
    TransactionsComponent,
    ButtonComponent,
    TransactionsTableComponent,
    PaginationComponent,
    NumbersOnlyDirective,
    MonetaryInputComponent,
    NewTransactionStatusModalComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({
      MatChevronLeft,
      MatChevronRight,
      MatCheck,
      MatClose,
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
