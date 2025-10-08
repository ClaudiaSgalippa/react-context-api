{/*Prodotti (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)*/}
{/*Implementiamo una Navbar visibile in tutte le pagine per navigare tra di esse*/}

import MyProducts from "../components/MyProducts"; {/*Import dei prodotti*/}

export default function Prodotti() {
    return (
        <>
            <h2 className="divPages">PRODOTTI DISPONIBILI NOW!</h2>
            <MyProducts/>
        </>
    )
}