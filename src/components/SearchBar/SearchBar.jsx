import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {

const [id, setID] = useState("");

const handleChange = (data) => {
   const {value} = data.target;
   setID(value);
}

const handleSearch = () => {
   props.onSearch(id);
   setID("");
}


   return (
      <div className={styles.divBar}>
         <input 
         value={id}
         onChange={handleChange}
         className={styles.inputBar} 
         type='search' />
         <button 
         className={styles.buttonBar} 
         onClick={handleSearch}>Agregar</button>
      </div>
   );
}
