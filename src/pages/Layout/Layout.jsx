import Header from "../../Componentes/header/header.jsx"
import Footer from "../../Componentes/Footer/Footer.jsx"
import { BrowserRouter } from "react-router-dom"
import Rotas from '../../Rotas/Rotas.jsx'
function Layout () {
    return (
        <div>
           
            <BrowserRouter>
            <ContextoImagens>
              <Header/>
              <Rotas/>
              <Footer/>
             </ContextoImagens>
            </BrowserRouter>
             
        </div>
    )

}

export default Layout

