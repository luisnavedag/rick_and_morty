import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards, removeFav } from "../../redux/actions";
import styles from "./Favorites.module.css";


function Favorites({ myFavorites, filteredFavorites }){

const [aux, setAux] = useState(false);

// useEffect(() => {
//     setAux(false);
//     dispatch(filterCards("allCharacters")); // Restablecer filtro a "All Characters"
//   }, [myFavorites]);

const dispatch = useDispatch();

const handleOrder = (e) => {
    dispatch(orderCards(e.target.value))
    setAux(true)
}

const handleFilter = (e) =>{
    dispatch(filterCards(e.target.value))
}

const handleRemoveFav = (id) => {
    dispatch(removeFav(id));
}

return(
        <div>
            <div className={styles.divSelectors}>
            <select className={styles.select} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select className={styles.select} onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            </div>
            <div className={styles.divFav}>
            {
                filteredFavorites?.map(charac => {
                    return(
                        <Card 
                        id={charac.id}
                        key={charac.id}
                        name={charac.name}
                        species={charac.species}
                        origin={charac.origin?.name}
                        gender={charac.gender}
                        image={charac.image}
                        onClose={() => handleRemoveFav(charac.id)}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites,
        filteredFavorites: state.filteredFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);