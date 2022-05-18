function sumarListaConWhile(lista) {
  // lista = [1,2,3]
  let contador = 0;
  let suma = 0;
  while (contador < lista.length) {
    suma = suma + lista[contador];
    contador = contador + 1;
  }
  return suma;
}

function sumarListaConFor(lista) {
  // lista = [1,2,3]
  let suma = 0;
  for (let contador = 0; contador < lista.length; contador++) {
    suma = suma + lista[contador];
  }
  return suma;
}

console.log(sumarListaConWhile([1, 2, 3]));
console.log(sumarListaConFor([1, 2, 3, 4, 5, 6]));

console.log("EJEMPLO");
console.log([1, 23, 12, 2, 4].length);

function esMayorDeEdad(edad) {
  if (edad > 17) {
    return true;
  } else if (edad <= 17 && edad >= 0) {
    return false;
  } else {
    console.error("La edad debe ser mayor a cero");
    return false;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function piedraPapelOTijeras(jugadaHumana) {
  let numeroAleatorio = getRandomInt(1, 3);
  let jugadaComputadora;

  if (numeroAleatorio == 1) {
    jugadaComputadora = "piedra";
  } else if (numeroAleatorio == 2) {
    jugadaComputadora = "papel";
  } else if (numeroAleatorio == 3) {
    jugadaComputadora = "tijeras";
  }

  if (jugadaComputadora == jugadaHumana) {
    return "Empate";
  }
  if (jugadaComputadora == "piedra" && jugadaHumana == "papel") {
    return "Ganaste";
  }
  if (jugadaComputadora == "piedra" && jugadaHumana == "tijeras") {
    return "Perdiste";
  }
  if (jugadaComputadora == "papel" && jugadaHumana == "piedra") {
    return "Empate";
  }
  if (jugadaComputadora == "papel" && jugadaHumana == "tijeras") {
    return "Perdiste";
  }
  if (jugadaComputadora == "tijeras" && jugadaHumana == "papel") {
    return "Ganaste";
  }
  if (jugadaComputadora == "tijeras" && jugadaHumana == "piedra") {
    return "Empate";
  }
}

piedraPapelOTijeras("piedra");

//JAVASCRIPT SCOPE

{
  let a = 5;
  {
    a = 6;
  }
  {
    a = 7;
  }
  {
    console.log(a); // a vale 5
  }
}
