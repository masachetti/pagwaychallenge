import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ButtonComponent } from './button/button.component';
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgIconsModule } from '@ng-icons/core';
import { matChevronLeft as MatChevronLeft, matChevronRight as MatChevronRight } from '@ng-icons/material-icons/baseline'

@NgModule({
  declarations: [
    AppComponent,
    NovaTransacaoComponent,
    TransacoesComponent,
    ButtonComponent,
    TransactionsTableComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ MatChevronLeft, MatChevronRight }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
