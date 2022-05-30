import styles from "./styles/Fruta.module.css";

export default function Fruta({ tipo, img, onClick }) {
  return (
    <div className={styles.fruta} onClick={onClick}>
      <img src={img} alt="" />
      <h1>{tipo}</h1>
    </div>
  );
}
