import "./lista.css"
import { useState, useEffect } from "react"
import {toast} from "react-toastify"

export default function MinhaLista() {

    const[lista, setLista] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem("@primeflix")
        setLista(JSON.parse(minhaLista) || [])
    }, [])

    function excluirFilme (id) {
        let filtroFilmes = lista.filter((item) => {
            return (item.id !== id)
        })
        setLista(filtroFilmes)
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
        toast.success("Filme removido")
    }

    return(
        <div className="containerLista">
            <h1 className="listaH1">Minha Lista</h1>

            {lista.length === 0 && <h2 className="listaVazia">Você não possui nenhum filme salvo :(</h2>}

            <ul className="lista">
                {lista.map((item) => {
                    return (
                        <li key={item.id} className="listaLi">
                            <div className="item">
                                <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="posterLista" alt={item.title}/>
                                <h4 className="liH4">{item.title}</h4>
                            </div>
                            <div className="buttonItem">
                                <button onClick={() => excluirFilme(item.id)} className="buttonDel">Remover</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}