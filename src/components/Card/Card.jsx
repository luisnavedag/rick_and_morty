import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <div className={styles.divButton}>
         <button className={styles.cardDeleteButton} onClick={props.onClose}>X</button>
      </div>
      <div className={styles.divText}>
         <h2 className={styles.cardName} >{props.name} </h2>
         <h4 className={styles.cardDetails} >{props.status}  </h4>
         <h4 className={styles.cardDetails} >{props.species} </h4>
         <h4 className={styles.cardDetails} >{props.gender} </h4>
         <h4 className={styles.cardDetails} >{props.origin} </h4>
      </div>
         <img src= {props.image} alt={props.name}/> 
      </div>
   );
}
