import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {

const [id, setID] = useState("");

const handleChange = (data) => {
   const {value} = data.target;
   setID(value);
}

   return (
      <div className={styles.divBar}>
         <input 
         onChange={handleChange}
         className={styles.inputBar} 
         type='search' />
         <button 
         className={styles.buttonBar} 
         onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
