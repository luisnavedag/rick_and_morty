import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";



export default function Nav(props){

    return (
        <div className={styles.navContainer}>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}