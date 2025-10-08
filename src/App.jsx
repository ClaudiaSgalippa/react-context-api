import './App.css' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'; {/*Import della libreria di ReactRouter*/}
import Homepage from "./pages/Homepage"; {/*Import della pagina di riferimento*/}
import ChiSiamo from "./pages/ChiSiamo"; {/*Import della pagina di riferimento*/}
import Prodotti from "./pages/Prodotti"; {/*Import della pagina di riferimento*/}
import DefaultLayout from './layout/Defaultlayout'; {/*Import del layout di default creato in DefaultLayout*/}
import DettaglioProdotto from "./pages/DettaglioProdotto"; {/*Import della pagina di riferimento*/}
import PageNotFound from "./pages/PageNotFound"; {/*Import della pagina di riferimento*/}
import {BudgetProvider} from 'react-router-dom'; {/*Import del Context API (componente) personalizzato*/}

function App() {

  return (
    <>
      <BudgetProvider> {/*Inserimento del provider personalizzato in "BudgetContext"*/}
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout/>}> {/*Inserimento della rotta genitore*/}
              <Route path="/" element={<Homepage/>}/> {/*Inserimento delle rotte figlie*/}
              <Route path="/chisiamo" element={<ChiSiamo/>}/>
              <Route path="/prodotti"> {/*Inserimento della nuova rotta padre*/}
                <Route index element={<Prodotti/>}/> {/*Inserimento della nuova sottorotta figlia*/}
                <Route path=":id" element={<DettaglioProdotto/>}/> {/*Inserimento della sottorotta dinamica con raggruppamento*/}
              </Route> 
              <Route path="*" element={<PageNotFound/>}/> {/*Tutto quello che non è previsto nelle route precedenti, reinderizzi su una pagina "PageNotFound" - Bonus*/}
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  )
}

export default App