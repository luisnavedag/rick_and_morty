import styles from "./Card.module.css";
import {  NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";


function Card(props) {
   const [isFav, setIsFav] = useState(false);

   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);
      }
     else{
         setIsFav(true);
         props.addFav(props)
   }
}
useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
}, [props.myFavorites]);

   return (
      <div className={styles.divCard}>
         <div className={styles.divButton}>
            {
            isFav ? (<button className={styles.favButton} onClick={handleFavorite}>❤️</button>) 
                  : (<button className={styles.favButton} onClick={handleFavorite}>🤍</button>)
            }
         <button className={styles.cardDeleteButton} onClick={props.onClose}>X</button>
         </div>
         <NavLink 
         to={`/detail/${props.id}`}
         className={styles.navLink}>
         <img src= {props.image} alt={props.name}/> 
      <div className={styles.divText}>
         <h2 className={styles.cardName}>{props.name} </h2>
         <h4 className={styles.cardDetails} >{props.status}  </h4>
         <h4 className={styles.cardDetails} >{props.species} </h4>
         <h4 className={styles.cardDetails} >{props.gender} </h4>
         <h4 className={styles.cardDetails} >{props.origin} </h4>
      </div>
         </NavLink>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)
