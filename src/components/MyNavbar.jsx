import {NavLink} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}
import {useBudget} from "../contetx/BudgetContext"; {/*Import del costum hook dalla funzione di provider, in modo da poter trasmettere i VALUE*/}

const links = [ 
    {path:"/", label:"Homepage"}, 
    {path:"/chisiamo", label:"ChiSiamo"},
    {path:"/prodotti", label:"Prodotti"}
]; {/*Mappatura degli oggetti*/}

const MyNavbar = () => {
    const {budgetMode, setBudgetMode} = useBudget(); {/*VALUE che rendiamo disponibili da BudgetContext (PROVIDER (VALUE)=>CONSUMER)*/}

    return (
        <nav className="containerNav">
            <ul className="ulStyle">
                {links.map(link => (
                    <li key={link.path} className="liStyle">
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li> 
                ))}
                <div className="containerButton">
                    <p>NEW!!</p>
                    <button className="button" onClick={() => setBudgetMode((prev) => !prev)}> {/*inverte il valore booleano precedentemente impostato in BudgetContext*/}
                        {budgetMode ? "Modalità Budget Off" : "Modalità Budget On"}
                    </button> 
                </div>
                
            </ul>
        </nav>
    )
}

export default MyNavbar