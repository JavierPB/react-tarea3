
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from './components/menu/Menu'
import Sidebar from './components/sidebar/Sidebar'
import Home from './containers/home/Home'
import Pokedex from './containers/pokedex/Pokedex'
import PokemonDetail from './containers/pokemon-detail/PokemonDetail'
import routes from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
      <Router>

        <Route path="/">
          <Menu />
          <Sidebar />
        </Route>
        <div className="content-wrapper">
          <div className="content">
            <div className="container-fluid">
              <Switch>
                <Route path={routes.HOME} exact>
                  <Home />
                </Route>
                <Route path={routes.POKEMON} exact>
                  <Pokedex />
                </Route>
                <Route path={routes.POKEMON_DETAIL}>
                  <PokemonDetail />
                </Route>
              </Switch>
            </div>
          </div>
        </div>

        <div className="footer">
          &copy;2021. J.P.B
        </div>
      </Router>
      </div>
     </Provider>
  );
}
export default App;
