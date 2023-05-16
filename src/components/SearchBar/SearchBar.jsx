import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   return (
      <div className={styles.divBar}>
         <input className={styles.inputBar} type='search' />
         <button className={styles.buttonBar} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
