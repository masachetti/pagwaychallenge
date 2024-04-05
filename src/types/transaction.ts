export interface Transaction {
  valor: number;
  numeroCartao: number;
  nomePortadorCartao: string;
  descricao: string;
  id: string;
  recebiveis: Array<Recebivel>;
  codigoSegurancaCartao: number;
  validadeCartao: string;
}

export type NewTransaction = Omit<Transaction, 'id'>;

export interface Recebivel {
  dataPagamento: number;
  status: 'Pago' | 'Pendente';
  valorLiquido: number;
}
