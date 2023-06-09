import React from "react";
import styles from "./About.module.css";

export default function About(props){

    
    return (
        <div className={styles.divAbout}>
            <img className={styles.imgApp}  src={require("./rickandmortylogo.png")} alt="Rick & Morty App" />
            <div className={styles.imgRym}> </div>
        </div>

    )
}