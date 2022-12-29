import '../styles/components/navcontainer.sass'
import Logo200 from '../images/be200.svg'

const NavContainer = () => {
  return (
    <nav id='nav-container'>
        <div id="logo-container">
            <img src={Logo200} alt="Boa Esporte" />
            <h2>Boa Esporte FC</h2>
        </div>
        <div id="menu-container">
            <a href="#titles-container">Sala de Troféus</a>
        </div>
    </nav>
  )
}

export default NavContainer