import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import routes from "../../routes"
import { pokemonCaptureAction, pokemonDetail, pokemonGetAll, pokemonReleaseAction } from "../../store/pokedex/actions"

import {getAllPokemonsSelector, getPokemonSelector} from '../../store/pokedex/selectors'


const PokemonDetail = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(getPokemonSelector)
  const pokemon_list = useSelector(getAllPokemonsSelector)

  const { id } = useParams()

  useEffect(()=>{
    if (pokemon_list.length === 0 ) dispatch(pokemonGetAll())
    if (pokemon_list.length > 0) dispatch(pokemonDetail(id))
  }, [id, pokemon_list, dispatch])
  
  const imageName = String(id).padStart(3, 0)
  
  const captureHandle = () => {
    const id = pokemon.id
    dispatch(pokemonCaptureAction(id))
  }

  const releaseHandle = () => {
    const id = pokemon.id
    dispatch(pokemonReleaseAction(id))
  }

  return pokemon ? (
    <div>
      <h3>
        <Link to={routes.POKEMON}>
          <i className="fas fa-arrow-left"></i>
        </Link>
      </h3>
    
    <div className="card card-primary mt-3">
      <div className="card-header">
        <h2 className="card-title">{pokemon.name.english}</h2>
        {  pokemon.captured ? (
          <div className="float-right">
            <span className="badge badge-danger">¡Capturado!</span>
          </div>
          ): ''
        }
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="text-center">
              <img src={`/thumbnails/${imageName}.png`} alt="pokemon" />
              <div>
                {pokemon.type.map( (el, key) => {
                  const bagdeStyle = {
                    backgroundColor: "#c3c3c3",
                  }
                  if( el === "Grass") {
                    bagdeStyle.backgroundColor = "olive"
                    bagdeStyle.color = "white"
                  } else if ( el === "Poison") {
                    bagdeStyle.backgroundColor = "purple"
                    bagdeStyle.color = "white"
                  }
                  else if ( el === "Bug") {
                    bagdeStyle.backgroundColor = "brown"
                    bagdeStyle.color = "white"
                  }
                  else if ( el === "Ground") {
                    bagdeStyle.backgroundColor = "tan"
                    bagdeStyle.color = "black"
                  }
                  else if ( el === "Water") {
                    bagdeStyle.backgroundColor = "lightseagreen"
                    bagdeStyle.color = "black"
                  }
                  
                  return (
                    <span key={key} className="badge m-1" style={bagdeStyle}>{ el }</span>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            STATS
            <table className="table">
              <tbody>
                <tr>
                  <th className="text-right">HP:</th><td>{pokemon.base.HP}</td>
                  <th className="text-right">Speed:</th><td>{pokemon.base.Speed}</td>
                </tr>
                <tr>
                  <th className="text-right">Attack:</th><td>{pokemon.base.Attack}</td>
                  <th className="text-right">Sp. Attack:</th><td>{pokemon.base.SpAttack}</td>
                </tr>
                <tr>
                  <th className="text-right">Defense:</th><td>{pokemon.base.Defense}</td>
                  <th className="text-right">Sp. Defense:</th><td>{pokemon.base.SpDefense}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center">
          { pokemon.captured ? (
            <button className="btn btn-success" onClick={releaseHandle}>
              <i className="fas fa-unlink"></i>&nbsp;
              LIBERAR
            </button>
          ): (
            <button className="btn btn-warning" onClick={captureHandle}> 
              <i className="fas fa-crosshairs"></i>&nbsp;
              CAPTURAR
            </button>
          )
          }
        </div>
      </div>
    </div>
    </div>
  ): (<div>Loading....</div>)
}

export default PokemonDetail
