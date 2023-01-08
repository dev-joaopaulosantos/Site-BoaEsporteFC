import '../styles/components/navcontainer.sass'
import Logo200 from '../images/be200.svg'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";

const NavContainer = () => {
  return (
    <nav id='nav-container'>
        <div id="logo-container">
            <img src={Logo200} alt="Boa Esporte" />
            <h2>Boa Esporte FC</h2>
        </div>
        <div id="menu-container">
            <NavLink to="/" > <AiOutlineHome />Home</NavLink>
            <NavLink to="/trophies"><GiTrophyCup />Troféus</NavLink>
        </div>
    </nav>
  )
}

export default NavContainer