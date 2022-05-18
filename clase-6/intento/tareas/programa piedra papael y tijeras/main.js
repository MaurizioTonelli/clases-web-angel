let botonPiedra = document.querySelector("#piedra");
let botonPapel =  document.querySelector("#papel");
let botonTijera = document.querySelector("#tijera");

/*botonPiedra.addEventListener ("clcik", ()=>{
    let parrafo =document.querySelector("#respuesta");
    parrafo.textContent = "hola"
})*/

botonPiedra.addEventListener("click",()=>{
    piedraPapelOTijeras("piedra")
})


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
      let parrafo = document.querySelector("#eleccioncomputadora"); 
              parrafo.textContent="la computadora eligio piedra";
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