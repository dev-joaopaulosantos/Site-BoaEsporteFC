import '../styles/components/maincontainer.sass'
import Football from '../images/football.svg'
import BoaEsporte from '../images/BoaEsporte.png'
import BoaEsporteGif from '../images/BE.gif'


const MainContainer = () => {
  return (
    <main id="main-container">
        <div id="historia-container">
            <p id="p-titulo">Conheça a nossa</p>
            <h1>História</h1>
            <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore, suscipit eaque illo cum minima excepturi amet 
                necessitatibus quod aut dolores quasi repellendus magni 
                iste, mollitia modi autem, consectetur voluptatum rerum?
            </p>
            <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Tempore, suscipit eaque illo cum minima excepturi amet 
                necessitatibus quod aut dolores quasi repellendus magni 
                iste, mollitia modi autem, consectetur voluptatum rerum?
            </p>
        </div>
        <div id="img-container">
            <img src={Football} alt="Boa Esporte" />
        </div>
    </main>
  )
}

export default MainContainer