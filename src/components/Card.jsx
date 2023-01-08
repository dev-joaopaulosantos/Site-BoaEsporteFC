import '../styles/components/card.sass'

const Card = ({trophy, nome, local, ano}) => {
  return (
    <ul className='card'>
        <li className="trophy">
            {trophy}
        </li>
        <li className="info">
            <h3>Campeonato:</h3><span>{nome}</span>
        </li>
        <li className="info">
            <h3>Local:</h3><span>{local}</span>
        </li>
        <li className="info">
            <h3>Ano:</h3><span>{ano}</span>
        </li>
    </ul>
  )
}

export default Card