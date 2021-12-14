type Animal = {
	respirar(): void;
}

type Rinoceronte extends Animal = {
	grunhir(): void
}

type Passarinho = Animal | {
	cantar(): void;
}

type Elefante = {
	bramir(): void;
} extends Animal

type Cobra = Animal & {
	silvar(): void;
}

const respirar = () => console.log('respirando')

const rinoceronte: Rinoceronte = {
	respirar,
	grunhir: () => console.log('🦏')
}

const passarinho: Passarinho = {
	respirar,
	cantar: () => console.log('🦜')
}

const elefante: Elefante = {
	respirar,
	bramir: () => console.log('🐘')
}

const cobra: Cobra = {
	respirar,
	silvar: () => console.log('🐍')
}