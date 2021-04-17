export const POKEDEX_LIST = 'POKEDEX_LIST'
export const POKEMON_DETAIL = 'POKEMON_DETAIL'
export const POKEMON_CAPTURE = 'POKEMON_CAPTURE'
export const POKEMON_RELEASE = 'POKEMON_RELEASE'
export const POKEMON_ADDNEW = 'POKEMON_ADDNEW'


export const pokemonGetAll = () => {
    return {
        type: POKEDEX_LIST,
        payload: undefined
    }
}

export const pokemonDetail = (id) => {
    return {
        type: POKEMON_DETAIL,
        payload: {
            id: id
        }
    }
}

export const pokemonCaptureAction = (id) => {
    return {
        type: POKEMON_CAPTURE,
        payload: {
            id: id
        }
    }
}

export const pokemonReleaseAction = (id) => {
    return {
        type: POKEMON_RELEASE,
        payload: {
            id: id
        }
    }
}

export const pokemonAddNewAction = ({...data}) => {
    return {
        type: POKEMON_ADDNEW,
        payload: {
            id: data.id,
            name: { english: data.name } ,
            type: ["Unknown"],
            base: {
                HP: data.HP,
                Attack: data.Attack,
                Defense: data.Defense,
                SpAttack: data.SpAttack,
                SpDefense: data.SpDefense,
                Speed: data.Speed
            }
        }
    }
}