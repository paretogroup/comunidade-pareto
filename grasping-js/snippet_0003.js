const validarCampos = function(campos) {
  const validadores = [].slice.call(arguments).slice(1);

  for (const validador of validadores) {
    validador(campos);
  }
}

const validarCamposVazios = (campos) => {
  const camposVazios = campos.filter(campo => {
    return !campo.valor && campo.valor != 0
  });

  if (camposVazios.length) {
    throw new Error("Campos não podem ser vazios.");
  }
};

const validarCamposGrandes = (campos) => {
  const limite = 10;

  const camposGrandes = campos.filter(campo => {
    return campo.valor && campo.valor.length > limite; 
  });

  if (camposGrandes.length) {
    throw new Error("Campos não podem passar o limite de " + limite + " caracteres.");
  }
}

const validarFormulario = () => {
  const campos = [
    {
      nome: "Nome",
      valor: "Pedro"
    },
    {
      nome: "Idade",
      valor: "40"
    },
    {
      nome: "Cidade",
      valor: "Rio de Janeiro"
    },
  ];

  validarCampos(campos, validarCamposVazios, validarCamposGrandes);
}