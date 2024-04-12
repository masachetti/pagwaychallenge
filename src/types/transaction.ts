export type Transaction = {
  valor: number;
  descricao: string;
  nomePortadorCartao: string;
  numeroCartao: string;
  validadeCartao: string;
  codigoSegurancaCartao: number;
  dataTransacao: number;
  id: number;
} & (HasReceivable | WithoutReceivable);

interface HasReceivable {
  possuiRecebivel: true;
  statusRecebivel: 'Pago' | 'Pendente';
  dataPagamentoRecebivel: number;
  valorRecebivel: number;
}

interface WithoutReceivable {
  possuiRecebivel: false;
  statusRecebivel: null;
  dataPagamentoRecebivel: null;
  valorRecebivel: null;
}

export type NewTransaction = Omit<
  Transaction,
  | 'id'
  | 'possuiRecebivel'
  | 'statusRecebivel'
  | 'dataPagamentoRecebivel'
  | 'valorRecebivel'
>;

export type NewTransactionResponseStatus = 'idle' | 'success' | 'error';
