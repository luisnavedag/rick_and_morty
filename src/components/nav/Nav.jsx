import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";




export default function Nav(props){
    const location = useLocation();
    // console.log(location);
     
    if(location.pathname === "/") return null;


    const logout = () =>{
        props.setAccess(false)
     }

    return (
        <div className={styles.navContainer}>
            <Link to="/home"><button className={styles.navButtons}>Home</button></Link>
            <Link to="/favorites"><button className={styles.favButton}>Favorites❤️</button></Link>
            <Link to="/about"><button className={styles.buttonAbout} >About</button></Link>
            <SearchBar onSearch={props.onSearch} />
            <button onClick={logout} className={styles.logoutButton}>Logout</button>
        </div>
    )
}