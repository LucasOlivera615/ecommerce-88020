import './navbar.css'
import logo from '../../Assets/img/logo-gyl-importaciones-1.2.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


    return (
        <nav className='navBar'>
            <img src={logo} className='logo' alt="Logo de GyL importaciones" />
            <ul className='categorias'>
                <li><a href=''>Indumentaria</a></li>
                <li><a href=''>Accesorios</a></li>
                <li><a href=''>Estilo de vida</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar