import "./erro.css"
import { Link } from "react-router-dom"

export default function Erro() {
    return(
        <div className="notFound">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link className="backButton" to="/">Voltar</Link>
        </div>
    )
}