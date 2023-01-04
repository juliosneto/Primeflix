import { BrowserRouter, Routes, Route } from "react-router-dom";

//Páginas
import Home from "./Pages/Home"
import Filmes from "./Pages/Filmes"
import MinhaLista from "./Pages/Lista";
import Erro from "./Pages/Erro";

//Componentes
import Header from "./Components/Header"

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/filme/:id" element={<Filmes/>}/>
                <Route path="/minhalista" element={<MinhaLista/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}