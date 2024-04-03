import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ButtonComponent } from './button/button.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NumbersOnlyDirective } from './numbers-only.directive';
import {
  matChevronLeft as MatChevronLeft,
  matChevronRight as MatChevronRight,
} from '@ng-icons/material-icons/baseline';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MonetaryInputComponent } from './monetary-input/monetary-input.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    NovaTransacaoComponent,
    TransacoesComponent,
    ButtonComponent,
    TransactionsTableComponent,
    PaginationComponent,
    NumbersOnlyDirective,
    MonetaryInputComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ MatChevronLeft, MatChevronRight }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
