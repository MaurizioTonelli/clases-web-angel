//VARIABLES, TIPOS DE VARIABLES

let miVariableEntera = 5;
let miVariableDecimal = 5.4;
let miVariableDeTexto = "Hola";
let miVariableBooleana = false;

console.log("Hola " + 5);
console.log(typeof miVariableDecimal);

//OPERACIONES ARITMÉTICAS

console.log(miVariableEntera * 5);
console.log(miVariableDecimal + miVariableEntera);

let miNuevaVariable = miVariableEntera - miVariableDecimal;

console.log(miNuevaVariable);

console.log(5 % 3);

//OPERADORES LÓGICOS / OPERADORES DE COMPARACIÓN / EXPRESIONES LÓGICAS

//OPERADORES DE COMPARACION
console.log(5 > 4);
console.log(2 < 3);
console.log(3 == 3);
console.log(3 <= 4);
console.log(5 >= 4);

let enunciadoA = 5 == 3; //false
let enunciadoB = 1 > 2; //false

console.log("El resultado es " + enunciadoA);

//AND
console.log(enunciadoA && enunciadoB);
//OR
console.log(enunciadoA || enunciadoB);

//ESTRUCTURAS DE CONTROL

let enunciadoC = false;

if (5 > 3) {
  console.log("Hola A");
} else {
  console.log("Hola B");
}

if (4 == 4) {
  console.log("Si es 4");
}

let edad = 25;

if (edad < 18) {
  console.log("No eres legal");
} else if (edad >= 18 && edad < 30) {
  console.log("Eres adulto joven");
} else if (edad >= 30 && edad < 80) {
  console.log("Eres adulto");
} else {
  console.log("");
}

let n = 1;

while (n < 5) {
  console.log("Hola");
  n = n + 1;
}

for (let i = 10; i > 0; i--) {
  console.log("Hola");
}
