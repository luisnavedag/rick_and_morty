import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    filteredFavorites: [] 
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD_FAV:
        return {
          ...state,
          myFavorites: [...state.myFavorites, payload],
          allCharacters: [...state.allCharacters, payload],
          filteredFavorites: [...state.filteredFavorites, payload]
        };
      case REMOVE_FAV:
        return {
          ...state,
          myFavorites: state.myFavorites.filter((char) => char.id !== Number(payload)),
          filteredFavorites: state.filteredFavorites.filter((char) => char.id !== Number(payload))
        };
      case FILTER:
        const filteredChar = state.myFavorites.filter((char) => char.gender === payload);
        return {
          ...state,
          filteredFavorites:
            payload === "allCharacters" ? [...state.myFavorites] : filteredChar
        };
      case ORDER:
        const filteredFavoritesCopy = [...state.filteredFavorites];
        return {
          ...state,
          filteredFavorites:
            payload === "A"
              ? filteredFavoritesCopy.sort((a, b) => a.id - b.id)
              : filteredFavoritesCopy.sort((a, b) => b.id - a.id)
        };
  
      default:
        return {
          ...state
        };
    }
  }