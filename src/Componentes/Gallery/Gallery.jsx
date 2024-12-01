
import {useContext} from "react"

import fogo from '../../assets/fogo.png'
import './Gallery.css'

const Gallery = ({ClassName="gallery-promo", images}) => {
    const images = [Slide6, Slide7, Slide8]

    return (
        <>
          <div id="carouselExampleControls" className="carousel slide gallery-promo" data-rite="carousel">
            <div className="carousel-inner" >
            {images.map((img, index) => (
           
            <div className={index == 0? "carousel-item active": "carousel-item"} key={index}>
              <div className='d-flex'>
                <div>
                  <p>melhores ofertas</p>
                  <h1>Queima de estoque <img src={fogo} alt='fogo'/></h1>
                  <button>Ver ofertas</button>
                </div>
                <img className="d-block w-50" src={img} alt=""/>
              </div>
            </div>
            ))}

<a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</a>
</div>
</div>
        </>
    )
}

export default Gallery