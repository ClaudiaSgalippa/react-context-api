{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import {Link, NavLink} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}

const links = [ 
    {path:"/", label:"Homepage"}, 
    {path:"/chisiamo", label:"ChiSiamo"},
    {path:"/prodotti", label:"Prodotti"}
]; {/*Mappatura degli oggetti*/}

const MyNavbar = () => {
    return (
        <nav className="containerNav">
            <ul className="ulStyle">
                {links.map(link => (
                    <li key={link.path} className="liStyle">
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li> 
                ))}
            </ul>
        </nav>
    )
}

export default MyNavbar