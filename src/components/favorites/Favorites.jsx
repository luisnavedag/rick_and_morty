import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";

function Favorites(props){
const { myFavorites } = props;
    return(
        <div>
            <h1>My favorites</h1>
            {
                myFavorites.map(charac => {
                    return(
                        <Card 
                        id={charac.id}
                        key={charac.id}
                        name={charac.name}
                        species={charac.species}
                        origin={charac.origin?.name}
                        gender={charac.gender}
                        image={charac.image}
                        />
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);