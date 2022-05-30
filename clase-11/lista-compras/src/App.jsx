import Fruta from "./Fruta";
import ItemFruta from "./ItemFruta";
import styles from "./styles/App.module.css";
import { useState } from "react";

function App() {
  let [listaDeFrutas, setListaDeFrutas] = useState([]);

  function agregarItem(fruta) {
    let copiaDeFrutas = [...listaDeFrutas];
    copiaDeFrutas.push(fruta);
    setListaDeFrutas(copiaDeFrutas);
  }

  function quitarItem(indice) {
    let copiaDeFrutas = [...listaDeFrutas];
    copiaDeFrutas.splice(indice, 1);
    setListaDeFrutas(copiaDeFrutas);
  }

  return (
    <>
      <div className={styles.contenedorFrutas}>
        <Fruta
          onClick={() => {
            agregarItem("platano");
          }}
          tipo="platano"
          img="https://www.quimicaysociedad.org/wp-content/uploads/2015/06/platano.jpg"
        />
        <Fruta
          onClick={() => {
            agregarItem("manzana");
          }}
          tipo="manzana"
          img="https://cdn.pixabay.com/photo/2017/01/17/12/14/apple-1986660_960_720.png"
        />
        <Fruta
          onClick={() => {
            agregarItem("pera");
          }}
          tipo="pera"
          img="https://perfumesyfragancias.online/wp-content/uploads/2018/10/poire.jpg"
        />
      </div>
      <div className={styles.listaFrutas}>
        {listaDeFrutas.map(function (fruta, indice) {
          return (
            <ItemFruta tipo={fruta} indice={indice} funcion={quitarItem} />
          );
        })}
      </div>
    </>
  );
}

export default App;
