import "./filmes.css"
import { useState, useEffect } from "react"
import { useParams, useNavigate     } from "react-router-dom"
import api from "../../Services/api"
import {toast} from "react-toastify"

export default function Filmes() {
    const {id} = useParams()
    const redirect = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "105d839d6820311f0b202cbb559501a5",
                    language: "pt-BR",
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                redirect("*", {replace: true})
                return
            })
        }
        loadFilme()

        return () => {
            console.log("Componente desmontado")
        }
    }, [redirect, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem("@primeflix")
        let filmesSalvos = JSON.parse(minhaLista) || []
        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme) {
            toast.warn("Esse filme já está na sua lista")
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
        toast.success("Filme adicionado a lista")
    }

    if(loading) {
        return (
            <div className="loadingDetails">
                <h1>Carregando...</h1>
            </div>
        )
    }

    return (
        <div className="movieInfo">
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
            <h1>{filme.title}</h1>
            <div className="sinopse">
                <h3>Sinopse</h3>
                <p>{filme.overview}</p>
            </div>
            <h4 className="review">Avaliação: {filme.vote_average.toFixed(1)} / 10</h4>
            <div className="buttons">
                <button onClick={salvarFilme} className="buttonAdd">Adicionar</button>
                <a className="linkTrailer" rel="external" href={`https://youtube.com/results?search_query=${filme.title}%20trailer`} target="blank">Trailer</a> 
            </div>
        </div>
    )
    
}