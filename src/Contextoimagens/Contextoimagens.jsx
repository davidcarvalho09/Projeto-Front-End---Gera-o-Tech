import {createContext, useState} from "react"
import Slide6 from '../../assets/home-slide-6.jpeg'
import Slide7 from '../../../src/assets/home-slide-7.jpeg'
import Slide8 from '../../../src/assets/home-slide-8.jpeg'
import tenis from "../assets/tenisCard.png"
const imagensContexto = {
    imagens: [Slide6, Slide7, Slide8],
    cards: [
        {
            categoria:"Tenis",
            descricao: "K-Swiss V8 - Masculino",
            src: tenis,
            preco: 200,
            precoDesconto: 180

        }
    ]
}

const ThemeContext = createContext();

const ContextoImagens = ({children}) => {
  const [imgContext, setImgContext] = useState(imagensContexto)
  return (
    <>
      <ThemeContext.Provider value={{imgContext, setImgContext}}>
      {children}
      </ThemeContext.Provider>

    </>
  )
}
export {ContextoImagens} 