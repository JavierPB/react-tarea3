import { NavLink } from "react-router-dom"

import routes from '../../routes'

const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <NavLink to={routes.HOME} className="nav-link" exact>
                                <i className="nav-icon fas fa-home"></i>
                                <p>Inicio</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={routes.POKEMON} className="nav-link">
                                <i className="nav-icon fas fa-book"></i>
                                <p>Pokedex</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar
