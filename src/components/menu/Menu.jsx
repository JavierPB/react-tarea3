

const Menu = () => {
    const voidUrl = '#'
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href={voidUrl} role="button">
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu