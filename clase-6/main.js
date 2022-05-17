// try-catch PENDIENTE

function esMayorDeEdad(edad) {
  if (edad < 0) {
    throw SyntaxError;
  }
  return 5;
}

try {
  console.log(esMayorDeEdad(3));
} catch (err) {
  console.log("Hubo un error");
} finally {
  console.log("Siempre se va a ejecutar");
}

console.log("sigue");

// NODE JS
