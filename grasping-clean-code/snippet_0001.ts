type Produto = {
  nome: string,
  dataValidade: Date,
  valorUnitario: number,
}

type NotaFiscal = {
  produtos: Produto[],
  valorTotal: number,
  dataEmissao: Date,
}

const funcaoA = (notaFiscal: NotaFiscal): number => {
  const d = new Date();

  const b = notaFiscal.produtos.filter(produto => {
    return produto.dataValidade.valueOf() <= d.valueOf();
  });

  const c = b.reduce((acumulador: number, produto: Produto) => {
    return acumulador + produto.valorUnitario;
  }, 0);

  return c;
}