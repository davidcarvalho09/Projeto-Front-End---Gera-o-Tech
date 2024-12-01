import Gallery from '../../Componentes/Gallery/Gallery'
import ThemeContext from "../../Contextoimagens/Contextoimagens.jsx"
import Gallery from "../../Componentes/Gallery/Gallery.jsx"
const Home = () => {
    const {imgContext, setImgContext} = useContext(ThemeContext)
    return (
        <div>

          <Gallery images={imagensBanner}/>
          <section>
            <ColecoesEmDestaque1/>
          </section>
          <section>
            <ColecoesEmDestaque2/>
          </section>
          <section>
            <ProdutosEmAlta/>
          </section>
               
    
        </div>
    )
}

export default Home