function esNumero(simbolo) {
  return !isNaN(simbolo);
}

function esOperador(simbolo) {
  return simbolo == "+" || simbolo == "-" || simbolo == "*" || simbolo == "/";
}

export { esNumero, esOperador };
