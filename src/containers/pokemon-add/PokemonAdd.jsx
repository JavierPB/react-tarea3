import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FormItem from "../../components/form-item/FormItem"
import { pokemonAddNewAction, pokemonGetAll } from "../../store/pokedex/actions"
import { getAllPokemonsSelector } from "../../store/pokedex/selectors"


const PokemonAdd = () => {
  const dispatch = useDispatch()
  const pokemon_list = useSelector(getAllPokemonsSelector)
  const [formData, setFormData] = useState({
    name: '',
    HP: '100',
    Attack: '30',
    Defense: '30',
    SpAttack: '0',
    SpDefense: '0',
    Speed: '10'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const agregarHandle = (e) => {
    console.log(formData)
    if( formData.name.trim().length === 0 ) {
      alert('Debe ingresar un nombre')
    }
    // if(pokemon_list.length === 0) dispatch(pokemonGetAll())
    dispatch(pokemonAddNewAction(formData))
  }

  return (
    <div className="card card-success mt-3">
      <div className="card-header">
        <h2 className="card-title">Agregar un nuevo Pokémon</h2>
      </div>
      <div className="card-body">
        <div className="form">
          <FormItem name="name" label="Nombre" handleChange={handleChange} value={formData.name} />
          <div className="row">
            <div className="col-lg-6">
              <FormItem name="HP" type="number" label="HP" handleChange={handleChange} value={formData.HP} />
              <FormItem name="Attack" type="number" label="Attack" handleChange={handleChange} value={formData.Attack} />
              <FormItem name="Defense" type="number" label="Defense" handleChange={handleChange} value={formData.Defense} />
            </div>
            <div className="col-lg-6">
              <FormItem name="Speed" type="number" label="Speed" handleChange={handleChange} value={formData.Speed} />
              <FormItem name="SpAttack" type="number" label="Sp. Attack" handleChange={handleChange} value={formData.SpAttack} />
              <FormItem name="SpDefense" type="number" label="Sp. Defense" handleChange={handleChange} value={formData.SpDefense} />
            </div>
          </div>
          <hr />
          <div className="text-center">
            <button className="btn btn-success" onClick={agregarHandle}>
              <i className="fas fa-save"></i>&nbsp;
              AGREGAR
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PokemonAdd
