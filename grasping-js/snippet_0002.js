const teste = () => {
  
  const marcas = [
    "Volvo",
    "BMW",
    "Ferrari",
    "Porsche",
    "Ford",
    "Fiat",
    "Chery",
    "Jeep"
  ];

  let i = 0;
  const quantasMarcas = marcas.length;
  
  while (i <= quantasMarcas) {
    console.log(marcas[i]);
    i++;
  }
}