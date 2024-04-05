import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaTransacaoComponent } from './pages/nova-transacao/nova-transacao.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';

const routes: Routes = [
  { path: 'nova-transacao', component: NovaTransacaoComponent },
  { path: 'transacoes', component: TransacoesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
