import data from './pokedex.json'

import { POKEDEX_LIST, POKEMON_DETAIL, POKEMON_CAPTURE, POKEMON_RELEASE } from "./actions";

const initialState = {
    allPokemon: [],
    pokemon: undefined
}


const pokedexReducer = (prevState = initialState, action) => {
    switch(action.type) {
        case POKEDEX_LIST:
            let allPokemonData = prevState.allPokemon
            if (prevState.allPokemon.length === 0){
                allPokemonData = data.map(el => ({ ...el, captured: false}))
            }
            return {
                ...prevState,
                allPokemon: allPokemonData
            }
        case POKEMON_DETAIL:
            const id = Number.parseInt(action.payload.id, 10)
            const found = prevState.allPokemon.find( el => el.id === id )
            console.log(found)
            return {
                // allPokemon: prevState.allPokemon,
                ...prevState,
                pokemon: found
            }
        case POKEMON_CAPTURE:
            return {
                ...prevState,
                allPokemon: prevState.allPokemon.map( el => el.id === action.payload.id ? ({ ...el, captured: true}): ({...el}) )
            }
        
        case POKEMON_RELEASE:
            return {
                ...prevState,
                allPokemon: prevState.allPokemon.map( el => el.id === action.payload.id ? ({ ...el, captured: false}): ({...el}) )
            }
        default:
            return prevState
    }
}

export default pokedexReducer