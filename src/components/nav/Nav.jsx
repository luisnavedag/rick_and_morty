import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";




export default function Nav(props){
    const location = useLocation();
    // console.log(location);
     
    if(location.pathname === "/") return null;


    return (
        <div className={styles.navContainer}>
            <Link to="/home"><button className={styles.navButtons}>Home</button></Link>
            <SearchBar onSearch={props.onSearch} />
            <Link to="/about"><button className={styles.buttonAbout} >About</button></Link>
        </div>
    )
}