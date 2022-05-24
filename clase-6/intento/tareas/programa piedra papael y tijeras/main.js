let botonPiedra = document.querySelector("#piedra");
let botonPapel = document.querySelector("#papel");
let botonTijera = document.querySelector("#tijera");

/*botonPiedra.addEventListener ("clcik", ()=>{
    let parrafo =document.querySelector("#respuesta");
    parrafo.textContent = "hola"
})*/

botonPiedra.addEventListener("click", () => {
  let parrafoEleccionJugador = document.querySelector("#eleccionjugador");
  let parrafoEleccionComputadora = document.querySelector(
    "#eleccioncomputadora"
  );
  let parrafoGanador = document.querySelector("#ganador");

  let resultado = piedraPapelOTijeras("piedra");

  parrafoEleccionJugador.textContent = "La computadora eligió piedra";
  parrafoEleccionComputadora.textContent =
    "El jugador eligió " + resultado.eleccionComputadora;
  parrafoGanador.textContent = resultado.ganador;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function piedraPapelOTijeras(jugadaHumana) {
  let numeroAleatorio = getRandomInt(1, 3);
  let jugadaComputadora;

  let resultado = {};

  if (numeroAleatorio == 1) {
    jugadaComputadora = "piedra";
    resultado.eleccionComputadora = "piedra";
  } else if (numeroAleatorio == 2) {
    jugadaComputadora = "papel";
    resultado.eleccionComputadora = "papel";
  } else if (numeroAleatorio == 3) {
    jugadaComputadora = "tijeras";
    resultado.eleccionComputadora = "tijeras";
  }

  if (jugadaComputadora == jugadaHumana) {
    resultado.ganador = "Empate";
  } else if (jugadaComputadora == "piedra" && jugadaHumana == "papel") {
    resultado.ganador = "Ganaste";
  } else if (jugadaComputadora == "piedra" && jugadaHumana == "tijeras") {
    resultado.ganador = "Perdiste";
  } else if (jugadaComputadora == "papel" && jugadaHumana == "piedra") {
    resultado.ganador = "Perdiste";
  } else if (jugadaComputadora == "papel" && jugadaHumana == "tijeras") {
    resultado.ganador = "Ganaste";
  } else if (jugadaComputadora == "tijeras" && jugadaHumana == "papel") {
    resultado.ganador = "Perdiste";
  } else if (jugadaComputadora == "tijeras" && jugadaHumana == "piedra") {
    resultado.ganador = "Ganaste";
  }

  return resultado;
}
