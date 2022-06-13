import styles from "./styles/App.module.css";
import { useState, useEffect } from "react";

function App() {
  let [display, setDisplay] = useState("");
  let [pilaDeNumeros, setPilaDeNumeros] = useState([""]);
  let [operador, setOperador] = useState(null);
  let [numeroCambiado, setNumeroCambiado] = useState(false);
  //numeroGuardado contiene el último número escrito. Permite repetir calculos consecutivos
  let [numeroGuardado, setNumeroGuardado] = useState(0);
  //calculoReiniciado indica si se presionó el símbolo de =, haciendo que no se encadenen más cálculos
  let [calculoReiniciado, setCalculoReiniciado] = useState(false);

  useEffect(() => {
    setDisplay(pilaDeNumeros[pilaDeNumeros.length - 1]);
  }, [pilaDeNumeros]);

  useEffect(() => {
    console.log(pilaDeNumeros);
  }, [pilaDeNumeros]);

  function iniciarNuevoCalculo(numero) {
    setPilaDeNumeros([numero]);
    setCalculoReiniciado(false);
    setNumeroCambiado(false);
    setNumeroGuardado(Number(numero));
  }

  function iniciarEscrituraDeNuevoNumero(numero) {
    setPilaDeNumeros([...pilaDeNumeros].concat(numero));
    setNumeroCambiado(false);
    setNumeroGuardado(Number(numero));
  }

  function actualizarNumeroActual(digito) {
    //Se toma el último número de la pila y se le agrega el dígito
    let copyPila = [...pilaDeNumeros];
    copyPila[copyPila.length - 1] = copyPila[copyPila.length - 1] + digito;
    setNumeroGuardado(Number(copyPila[copyPila.length - 1]));
    setPilaDeNumeros(copyPila);
  }

  function escribirDigito(digito) {
    //Evita la escritura de números ilegales
    if (isNaN(display + digito)) {
      return;
    }
    //Inicia un nuevo calculo después de que se hace click en "="
    if (calculoReiniciado) {
      iniciarNuevoCalculo(digito);
      return;
    }

    if (numeroCambiado) {
      iniciarEscrituraDeNuevoNumero(digito);
      return;
    }
    actualizarNumeroActual(digito);
  }

  function calcularNumerosPendientesEnFila() {
    if (pilaDeNumeros.length > 1) {
      setPilaDeNumeros([obtenerResultado()]);
    }
  }

  function escribirOperador(operador) {
    calcularNumerosPendientesEnFila();
    setOperador(operador);
    setNumeroCambiado(true);
    //evita que se borre la pila de números cuando se quiere seguir calculando
    setCalculoReiniciado(false);
  }

  function reiniciarCalculadora() {
    setPilaDeNumeros([""]);
    setOperador(null);
    setNumeroCambiado(false);
    setNumeroGuardado(0);
    setCalculoReiniciado(false);
  }

  function operar(numero1, numero2, operador) {
    if (operador == "+") {
      return Number(numero1) + Number(numero2);
    } else if (operador == "-") {
      return Number(numero1) - Number(numero2);
    } else if (operador == "*") {
      return Number(numero1) * Number(numero2);
    } else if (operador == "/") {
      return Number(numero1) / Number(numero2);
    }
  }

  function obtenerResultado() {
    if (pilaDeNumeros[0] && pilaDeNumeros[1]) {
      return operar(
        Number(pilaDeNumeros[0]),
        Number(pilaDeNumeros[1]),
        operador
      );
    } else {
      return operar(
        Number(Number(pilaDeNumeros[0])),
        Number(numeroGuardado),
        operador
      );
    }
  }

  function mostrarResultado() {
    setPilaDeNumeros([obtenerResultado()]);
    setNumeroCambiado(true);
    setCalculoReiniciado(true);
  }

  function operadorSeleccionado(operadorSeleccionado) {
    return operador == operadorSeleccionado;
  }

  return (
    <>
      <div className={styles.contenedor}>
        <div className={styles.display}>{display}</div>
        <div className={styles.numerosYOperaciones}>
          <div className={styles.contenedorNumeros}>
            {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."].map(
              function (digito, indice) {
                return (
                  <button
                    key={indice}
                    onClick={() => {
                      escribirDigito(digito);
                    }}
                  >
                    {digito}
                  </button>
                );
              }
            )}
            <button onClick={reiniciarCalculadora}>Ac</button>
          </div>
          <div className={styles.operaciones}>
            {["+", "-", "*", "/"].map(function (operador, indice) {
              return (
                <button
                  style={{
                    backgroundColor: operadorSeleccionado(operador)
                      ? "blue"
                      : "yellow",
                  }}
                  key={indice}
                  onClick={() => {
                    escribirOperador(operador);
                  }}
                >
                  {operador}
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.acciones}>
          <button onClick={mostrarResultado}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
