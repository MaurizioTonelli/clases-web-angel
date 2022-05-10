function codigo() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
}

function imprimirSumaDeDosNumeros(numero1, numero2) {
  console.log("Iniciando suma");
  console.log(numero1 + numero2);
  console.log("Suma terminada");
}

let a = imprimirSumaDeDosNumeros;

a(1, 2);

function obtenerSumaDeDosNumeros(numero1, numero2) {
  console.log("Iniciando suma");
  let suma = numero1 + numero2;
  console.log("Suma terminada");
  return suma;
}

let miSuma = obtenerSumaDeDosNumeros(2, 4);
console.log(miSuma);

let miLista = [1, 2, obtenerSumaDeDosNumeros, "Hola", 5];
console.log(miLista[2](5, 6));

let miDiccionario = {
  llave1: 2,
  llave2: "Hola",
  llave3: obtenerSumaDeDosNumeros,
  llave4: 5,
};

miDiccionario["llave1"];

function suma(a, b) {
  return a + b;
}

console.log(suma(3, 5));

let variable = 3 + suma(45, 30);
