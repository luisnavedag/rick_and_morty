import React from "react";
import styles from "./About.module.css";

export default function About(props){

    
    return (
        <div className={styles.divAbout}>
            <h1>Rick & Morty App</h1>
            <h4>Created by Luis Naveda</h4>
            <h4>FT-38b</h4>
            <img src={require("./Captura.PNG")} alt="Luis" />
        </div>

    )
}