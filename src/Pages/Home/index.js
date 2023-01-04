import "./home.css"
import { useState, useEffect } from "react"
import api from "../../Services/api"
import { Link } from "react-router-dom"

export default function Home() {

    
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "105d839d6820311f0b202cbb559501a5",
                    language: "pt-BR",
                    page: 1
                }
            })
            setFilmes(response.data.results)
            setLoading(false)
        }

        loadFilmes()
    }, [])

    if(loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="containerHome">
            <div className="moviesHome">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <h4>{filme.title}</h4>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <div className="homeButtons">
                                <Link className="movieLink" to={`/filme/${filme.id}`}>Acessar</Link>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}