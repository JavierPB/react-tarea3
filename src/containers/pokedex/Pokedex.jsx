import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

import routes from '../../routes'

import {pokemonGetAll} from '../../store/pokedex/actions'
import { getAllPokemonsSelector  } from '../../store/pokedex/selectors'

const Pokedex = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(getAllPokemonsSelector)

  useEffect(() => {
    if(pokemons.length === 0) dispatch(pokemonGetAll())
  }, [pokemons, dispatch])

  return pokemons.length > 0 ? (
    <div>
      <h1 className="mb-2">Pokedex</h1>
      <div className="card card-primary">
        <div className="card-body p-0">
          <div className="list-group">
            {pokemons.map((el) => (
              <Link key={el.id} to={`${routes.POKEMON}${el.id}/`} className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  
                  <h5>{ el.name.english }</h5>

                  { el.captured ? (
                    <small>
                      <span className="badge bg-danger">
                        Capturado!
                      </span>
                    </small>
                  ):''}
                </div>
              </Link>
            ))}
          </div>
          <div className="table-responsive">
            <table className="table m-0">
              <tbody>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ): (<div>Loading...</div>)
}

export default Pokedex