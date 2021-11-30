var teste = (idade) => {
	let faixa;
	let aptidoes = "";

	if (idade < 16) {
	  faixa = 1;
	} else if (idade >= 16 && idade < 18) {
	  faixa = 2;
	} else if (idade >= 18 && idade < 60) {
	  faixa = 3;
	} else {
	  faixa = 4;
	}

	switch (faixa) {
    default: 
     aptidoes = "não sei sua idade";
    case 4:
      aptidoes = "agora já tem prioridade! ";
    case 3:
      aptidoes = "já é maior de idade, pode dirigir ou beber, mas não ao mesmo tempo! " + aptidoes;
    case 2:
      aptidoes = "então você já pode votar, né? olha a responsa! " + aptidoes;
    case 1:
      aptidoes = "tem leite, mamãe? " + aptidoes;
	}

	return aptidoes;
}