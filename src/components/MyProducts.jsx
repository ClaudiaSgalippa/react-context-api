import MyProductCard from "./MyProductCard"; {/*Import della card del prodotto*/}
import {useState, useEffect} from "react"; {/*Import degli hook useState e useEffect*/}
import {useBudget} from "../contetx/BudgetContext"; {/*Import del contesto React creato tramite l'hook useBudget in "BudgetContext"*/}

export default function ProductsList() { {/*Creazione della variabile di stato*/}
    const [product, setProduct] = useState ([]); {/*Array vuoto per inserire i dati dalla chiamata*/}
    const {budgetMode} = useBudget(); {/*Utilizziamo l'hook per recuperare i dati dal PROVIDER*/}

    function fetchProduct () { {/*Chiamata AXIOS, se la risposta sarà positiva inserisci l'array richiamato, se negativa dai errore in console.log*/}
        axios.get("https://fakestoreapi.com/products")
            .then ((res) => setProduct(res.data))
            .catch ((error) => console.log(error))
    }

    useEffect (() => { {/*Utilizzo del useEffect per invocare la funzione*/}
        fetchProduct ();
    }, []); {/*Essendo una dipendenza di stato vuota, la funzione partirà soltanto all'avvio del componente (MOUNTING)*/}

    const filteredProduct = (budgetMode === true) 
        ? product.filter ((product) => product.price <= 30)
        : product; {/*Creiamo una costante con la condizione che: se il prezzo del prodotto è inferiore a 30€(TRUE) allora verranno filtrati (in un nuovo array), se invece superano quella cifra (FALSE) non verrà applicato nessun filtro e quindi mostrerà tutti i prodotti*/}

    return (
        <div className="">
            <div className="containerCard">
                {filteredProduct.map ((product) => (
                    <MyProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}