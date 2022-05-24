let cuadricula = document.getElementById("cuadricula");
let turno = "X";

function agregarClickACuadro(cuadro) {
  cuadro.addEventListener("click", function () {
    if (cuadro.textContent != "") {
      return;
    }
    if (turno == "X") {
      cuadro.textContent = "X";
      turno = "O";
    } else {
      cuadro.textContent = "O";
      turno = "X";
    }
  });
}

for (let i = 0; i < 9; i++) {
  let cuadro = document.createElement("div");
  cuadro.classList.add("cuadro");
  agregarClickACuadro(cuadro);
  cuadricula.appendChild(cuadro);
}
