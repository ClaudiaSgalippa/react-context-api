import {Outlet} from "react-router-dom"; {/*Import del componente speciale "Outlet"*/}
import MyNavbar from "../components/MyNavbar";  {/*Import della Navbar*/}

export default function DefaultLayout() {
    return (
        <> 
            <header className="displayNav">
                <MyNavbar/>
            </header>
            <main>
                <Outlet/> {/*Componente "segnaposto" utilizzato per il routing nidificato*/}
            </main>
        </>
    )
}