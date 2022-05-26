import { useState } from "react";

function App() {
  let [contador, setContador] = useState(0);
  let [numeroASumar, setNumeroASumar] = useState(0);

  function handleNumberChange(nuevoNumero) {
    setNumeroASumar(nuevoNumero);
  }

  function sumar() {
    setContador(contador + numeroASumar);
  }

  return (
    <>
      <h1>{contador}</h1>
      <input
        type="number"
        value={numeroASumar}
        onChange={function (e) {
          console.log(e);
          handleNumberChange(parseInt(e.target.value));
        }}
      />
      <button onClick={sumar}>Aumentar</button>
    </>
  );
}

export default App;
