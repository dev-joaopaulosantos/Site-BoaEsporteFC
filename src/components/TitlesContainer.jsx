import '../styles/components/titlescontainer.sass'
import { GiTrophyCup } from 'react-icons/gi'
import Card from './Card'
import titulos from '../database/db'

const TitlesContainer = () => {
  return (
    <section id="titles-container">
      <h2>Títulos mais Recentes</h2>
      <div className='cards'>
        { titulos.slice(0, 3).map((titulo) => (
          <Card key={titulo.id} trophy={titulo.trophy} nome={titulo.nome} local={titulo.local} ano={titulo.ano}/>
        )) }
      </div>
    </section>
  )
}

export default TitlesContainer 