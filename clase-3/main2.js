function callback() {
  let parrafo = document.querySelector("#mi-parrafo");
  parrafo.textContent = "Hola";
}

document.querySelector("#mi-boton").addEventListener("click", callback);
