import '../styles/components/card.sass'

const Card = ({trophy, nome, local, ano}) => {
  return (
    <div className='card'>
        <div className="trophy">
            {trophy}
        </div>
        <div className="info">
            <h3>Nome:</h3><span>{nome}</span>
        </div>
        <div className="info">
            <h3>Local:</h3><span>{local}</span>
        </div>
        <div className="info">
            <h3>Ano:</h3><span>{ano}</span>
        </div>
    </div>
  )
}

export default Card