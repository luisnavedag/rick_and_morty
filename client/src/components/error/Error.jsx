import React from "react";
import styles from "./Error.module.css";


export default function Error(props){
    return(
            
        <div className={styles.error}>
            <h1>ERROR 404</h1>
            <h2>Sorry, the page doesn't exist</h2>
            <img src="https://larepublica.cronosmedia.glr.pe/migration/images/FDOY6KYFDJB5LGVTQORJLSH4TM.jpg" alt="Morty crying" />
        </div>
            
        )
}