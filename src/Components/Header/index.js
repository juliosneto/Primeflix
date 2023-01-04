import "./header.css"
import { Link } from "react-router-dom"

export default function Header() {
    return(
        <header>
            <div className="logoDiv">
                <Link className="logo" to={"/"}>PRIMEFLIX</Link>
            </div>
            <div className="linksDiv">
                <Link className="navLinks" to={"/"}>Início</Link>
                <Link className="navLinks" to={"/minhalista"}>Minha Lista</Link>
            </div>
        </header>
    )
}