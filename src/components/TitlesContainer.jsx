import '../styles/components/titlescontainer.sass'
import { GiTrophyCup } from 'react-icons/gi'
import Card from './Card'

const titulos = [
  { trophy: <GiTrophyCup/>, nome: 'Copão Rural', local: 'Lagoa de São Frncisco', ano: '2022' },
  { trophy: <GiTrophyCup/>, nome: 'Copão Rural', local: 'Lagoa de São Frncisco', ano: '2022' },
  { trophy: <GiTrophyCup/>, nome: 'Copão Rural', local: 'Lagoa de São Frncisco', ano: '2022' }
]

const TitlesContainer = () => {
  return (
    <section id="titles-container">
      <h2>Títulos Recentes</h2>
      <div className='cards'>
        { titulos.map((titulo) => (
          <Card trophy={titulo.trophy} nome={titulo.nome} local={titulo.local} ano={titulo.ano}/>
        )) }
      </div>
    </section>
  )
}

export default TitlesContainer 