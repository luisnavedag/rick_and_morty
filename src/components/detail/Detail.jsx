import React from "react";
import styles from "./Detail.module.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail(props){
const [character, setCharacter] = useState({}); 

const { id } = useParams();

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (

        <div className={styles.divContainer}>
         <Link to="/home" ><button className={styles.close}>Back</button></Link>
           <div className={styles.divDetails}>
           <h1>{character.name}</h1>
           <h3>STATUS: {character.status} </h3> 
           <h3>GENDER: {character.gender} </h3> 
           <h3>SPECIE: {character.specie} </h3> 
           <h3>ORIGIN: {character.origin && character.origin.name} </h3>
           <h3>LOCATION {character.location && character.location.name} </h3>
           </div> 
           <div className={styles.divImg}>
            <img src={character.image} alt={character.name} />
            </div>
        </div>
    )
}