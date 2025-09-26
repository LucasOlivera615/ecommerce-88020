import './navbar.css'
import logo from '../../Assets/img/logo-gyl-importaciones-1.2.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


    return (
        <nav className='navBar'>
            <img src={logo} className='logo' alt="Logo de GyL importaciones" />
            <ul className='categorias'>
                <li>Indumentaria</li>
                <li>Accesorios</li>
                <li>Estilo de vida</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar