import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./types";


const initialState = {
    myFavorites: [],
    allCharacters: [],
    filteredFavorites: [],
    errors: false 
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD_FAV:
        return { ...state, myFavorites: payload, allCharacters: payload, filteredFavorites: payload, errors: false };
        case REMOVE_FAV:
          return { ...state, myFavorites: payload, filteredFavorites: payload, errors: false };
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
      case "ERROR":
        return {
          ...state,
          errors: payload
        }
  
      default:
        return {
          ...state
        };
    }
  }