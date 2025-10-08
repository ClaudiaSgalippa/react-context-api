import {createContext, useContext, useState} from "react"; {/*Import degli hook createContext, useContext e useState*/}

const BudgetContext = createContext(); {/*Creazione del contesto*/}

export function BudgetProvider ({children}) { {/*Definiamo un costum hook da esportare per "consumare" il contesto*/}
    const [budgetMode, setBudgetMode] = useState(false); {/*I dati che vogliamo trasmettere (le variabili di stato, il VALUE), in questo caso il valore booleano*/}

    return (
        <BudgetContext.Provider value={{budgetMode, setBudgetMode}}>{children}</BudgetContext.Provider> 
    ); {/*In questo modo, rendiamo il "wrap" disponibile a tutti i figli che decideranno di accedervi, ovvero i CONSUMER*/}
}

export const useBudget = () => useContext(BudgetContext);