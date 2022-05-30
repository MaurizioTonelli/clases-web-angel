import styles from "./styles/ItemFruta.module.css";

export default function ItemFruta({ tipo, indice, funcion }) {
  return (
    <div className={styles.itemFruta}>
      <p>{tipo}</p>
      <button
        onClick={() => {
          funcion(indice);
        }}
      >
        Borrar
      </button>
    </div>
  );
}
