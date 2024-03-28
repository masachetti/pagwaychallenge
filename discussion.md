# Requisitos

- Uma tela para adição/processamento de transações.
  - Form dividido em duas seções: Dados da transação e Dados do Cartão.
  - Dados da transação:
    - Input de valor estilizado para representação monetária.
    - Input de descrição, tipo texto.
  - Dados do cartão:
    - Input de nome, tipo texto.
    - Input do número do cartão, tipo texto restrito apenas para números.
    - Input da validade. Datepicker de mes+ano.
    - Input do CVV. Tipo texto restrito apenas para números e de tamanho limitado.
  - Botão para submissão do form para processamento da transação.
    - POST Request para o back-end contendo os dados do formulário.
  - Popup para apresentação da resposta do servidor sobre o processamento da transação.
- Uma tela para listagem de transações e apresentação dos saldos (liquidados e previstos).
  - Apresentar no topo da página o total do saldo liquidado e previsto.
    - Dado obtido por um GET request no endpoint de saldo.
  - Uma tabela contendo a lista de transações.
    - Dado obtido por um GET request no endpoint de transacao.
    - Cabeçalho da tabela com botão para mudar a ordenação dos itens.
  - Paginação.
    - Inpuct tipo select para selecionar quantos itens mostrar por página.
    - Botões de paginação: Primeira pagina, ultima pagina, por númeração, próxima e anterior.

# Diagramação da estrutura das páginas

![Diagrama das páginas](./diagram.png)

# Ressalvas

Algumas ressalvas serão tomadas para a facilitar e agilizar o processo:

- Mock do Back-End:
  - Será utilizado a biblioteca JSON-Server para mockar os endpoints do back-end afim de prover um mais realismo ao desafio.
- Headers e Footers:
  - Apesar de inseridos na diagramação, penso em não inserir no código final para poder focar mais na resolução do problema.
- Página inicial:
  - A página inicial será composta apenas por um componente de navegação afim de encaminhar para as rotas do desafio e tornar mais fácil o acesso.

Além disso, o desafio será primeiramente feito em Angular 12 para depois ser reescrito em Angular 17.
