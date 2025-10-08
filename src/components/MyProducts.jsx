import MyProductCard from "./MyProductCard"; {/*Import della card del prodotto*/}
import {useState, useEffect} from "react"; {/*Import degli hook useState e useEffect*/}

export default function ProductsList() { {/*Creazione della variabile di stato*/}
    const [products, setProducts] = useState ([]); {/*Array vuoto per inserire i dati dalla chiamata*/}

    function fetchProducts () { {/*Chiamata AXIOS, se la risposta sarà positiva inserisci l'array richiamato, se negativa dai errore in console.log*/}
        axios.get("https://fakestoreapi.com/products")
            .then ((res) => setProducts(res.data))
            .catch ((error) => console.log(error))
    }

    useEffect (() => { {/*Utilizzo del useEffect per invocare la funzione*/}
        fetchProducts ();
    }, []); {/*Essendo una dipendenza di stato vuota, la funzione partirà soltanto all'avvio del componente (MOUNTING)*/}

    return (
        <div className="">
            <div className="containerCard">
                {products.map ((product) => (
                    <MyProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}