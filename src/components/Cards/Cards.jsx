import Card from '../card/Card';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const {characters} = props;
   return (
   <div className={styles.divCards} >
      {characters.map(charac => 
            (<Card 
            key={charac.id}
            name={charac.name}
            species={charac.species}
            origin={charac.origin?.name}
            gender={charac.gender}
            image={charac.image}
            onClose={() => props.onClose(charac.id)}
            />))
      }
   </div>
   );
}
