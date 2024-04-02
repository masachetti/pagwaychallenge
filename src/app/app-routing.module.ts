import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaTransacaoComponent } from './nova-transacao/nova-transacao.component';
import { TransacoesComponent } from './transacoes/transacoes.component';

const routes: Routes = [
  { path: 'nova-transacao', component: NovaTransacaoComponent },
  { path: 'transacoes', component: TransacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
