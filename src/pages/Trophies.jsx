import '../styles/components/titlescontainer.sass'
import '../styles/components/pages/trophies.sass'
import Card from '../components/Card'
import titulos from '../database/db'
import BoaEsporteLong from "../images/BoaEsporteL.png"

const Trophies = () => {
  return (
    <section id="titles-container">
      <div className='img-container'>
        <img src={BoaEsporteLong} alt="Boa Esporte" />
      </div>
      <h2>Nossos Títulos</h2>
      <div className='cards'>
        { titulos.map((titulo) => (
          <Card key={titulo.id} trophy={titulo.trophy} nome={titulo.nome} local={titulo.local} ano={titulo.ano}/>
        )) }
      </div>
    </section>
  )
}

export default Trophies