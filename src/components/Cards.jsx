import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return (
   <div>
      {characters.map(charac => 
            (<Card 
            key={charac.id}
            name={charac.name}
            species={charac.species}
            origin={charac.origin?.name}
            gender={charac.gender}
            image={charac.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />))
      }
   </div>
   );
}
