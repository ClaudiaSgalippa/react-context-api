import {useState} from "react"; {/*Import dell'hook useState*/}
import {createContext} from "react"; {/*Import dell'hook createContent*/}

const BudgetContext = createContext(); {/*Creazione del contesto*/}

export default function BudgetProvider({children}) { {/*Definiamo il PROVIDER e quali "feature" vogliamo trasmettere (rendere disponibili)*/}
    const [budgetMode, setBudgetMode] = useState(false); {/*I dati che vogliamo trasmettere (le variabili di stato, il VALUE), in questo caso il valore booleano*/}

    return (
        <BudgetContext.Provider value={{budgetMode, setBudgetMode}}>{children}</BudgetContext.Provider> 
    ); {/*In questo modo, lo rendiamo disponibile a tutti i figli che decideranno di accedervi, ovvero i CONSUMER*/}
}