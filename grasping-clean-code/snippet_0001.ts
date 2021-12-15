type Produto = {
  nome: String,
  dataValidade: Date,
  valorUnitario: Number,
}

type NotaFiscal= {
  produtos: Produto[],
  valorTotal: Number,
  dataEmissao: Date,
}

const a = (notaFiscal: NotaFiscal): Produto[] => {
  const d = new Date();

  const b = notaFiscal.produtos.filter(produto => {
    return produto.dataValidade.valueOf() <= d.valueOf();
  });

  return b;
}