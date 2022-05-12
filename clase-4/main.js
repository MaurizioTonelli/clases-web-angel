let boton = document.querySelector("#mi-boton");

//DOM: Document Object Model

function escribirHola() {
  let parrafo = document.querySelector("#mi-parrafo");
  //Agregar texto a un elemento de HTML
  parrafo.textContent = "Hola";
  //Agregar/quitar clase a un elemento de HTML
  parrafo.classList.add("activado");
  parrafo.classList.remove("activado");
}

boton.addEventListener("click", escribirHola);
