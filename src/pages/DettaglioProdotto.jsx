import {useState, useEffect} from "react"; {/*Import degli hook useState e useEffect*/}
import {useParams} from "react-router-dom"; {/*Import dell'hook useParams*/}
import {Link} from "react-router-dom"; {/*Import dei componenti di navigazione per routing (tramite libreria React)*/}

export default function DettaglioProdotto () { {/*Funzione per l'estrapolazione dei dettagli del singolo prodotto*/}
    const {id} = useParams(); {/*Recupero del parametro "dinamico" aka estrapolazione dell'id tramite useParams*/}
    const [product, setProduct] = useState ();
    
    useEffect (() => { {/*Chiamata API per il recupero dei componenti necessari*/}
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then (res => setProduct(res.data))
        .catch (error => console.log(error))

    }, [])
                {/*Poniamo il quesito: se esiste questa proprietà, allora richiami la card. Se non esiste, "pagina" di loading*/}
    return ( 
        <>
            {product ? 
                (
                    <>
                        <div className="boxCard">
                            <div className="productNewCard">
                                <div className="productImg">
                                    <img src={product.image} alt={product.title}/>
                                </div>
                                <div className="productInfo">
                                    <p className="productTitle">{product.title}</p>
                                    <p className="productPrice">{product.price}€</p>
                                    <p className="productDescription">{product.description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/prodotti`}>
                                <h3>Non ti piace? Vabbè, cerca altro va'...</h3>
                            </Link>
                        </div>
                    </>
                    
                ) 
                : 
                (
                    <div className="patrizia">
                        <h2>Aspettate eh, che Patrizia lo sta cercando in magazzino...</h2>
                        <Link to={`/prodotti`}>
                            <h3>Se non ti va di aspettare... Torna più tardi!</h3>
                        </Link>
                    </div>
                )
            }   {/*Bonus caricamento del dettaglio prodotto + navigazione programmatica per il return alla pagina "Prodotti"*/}
        </>
    )
}