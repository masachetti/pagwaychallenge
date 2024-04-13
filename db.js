const casual = require("casual");
const fs = require('fs')

casual.define("recebivel", function (value) {
  const possuiRecebivel = casual.coin_flip;
  let statusRecebivel = null;
  let dataPagamentoRecebivel = null;
  let valorRecebivel = null;
  if (possuiRecebivel) {
    statusRecebivel = casual.random_element(["Pendente", "Pago"]);
    const deltaTimeStamp = casual.integer((from = 0), (to = 31536000));
    dataPagamentoRecebivel = ~~(
      new Date().getTime() / 1000 +
      (statusRecebivel === "Pendente" ? deltaTimeStamp : -deltaTimeStamp)
    );

    valorRecebivel = ~~(value * 0.05);
  }
  return {
    possuiRecebivel: possuiRecebivel,
    statusRecebivel: statusRecebivel,
    dataPagamentoRecebivel: dataPagamentoRecebivel,
    valorRecebivel: valorRecebivel,
  };
});

casual.define("transacao", function () {
  const value = casual.integer((from = 1000), (to = 99999)) * 100;
  const recebivel = casual.recebivel(value);
  const deltaTimeStamp = casual.integer((from = 0), (to = 31536000));
  const dataTransacao = ~~(new Date().getTime() / 1000 - deltaTimeStamp);
  return {
    valor: value,
    descricao: casual.short_description,
    nomePortadorCartao: casual.full_name,
    numeroCartao: casual.card_number(),
    validadeCartao: casual.card_exp,
    codigoSegurancaCartao: casual.integer((to = 100), (from = 999)),
    dataTransacao: dataTransacao,
    ...recebivel,
  };
});

const json = {
  saldo: {
    liquidado: casual.integer(100, 99999) * 100,
    pendente: casual.integer(100, 99999) * 100
  },
    transacoes: []
}
for (let i = 1; i<=500 ; i++){
    transacoes.transacoes.push({
        ...casual.transacao,
        id: i
    })
}
const result = JSON.stringify(json)

fs.writeFile('db3.json', result, (err) => console.log(err))