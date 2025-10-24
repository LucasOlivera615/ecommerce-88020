import './navbar.css'
import logo from '../../Assets/img/logo-gyl-importaciones-1.2.png'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


    return (
        <nav className='container-fluid navBar'>
            <div className='col'>
                <Link to="/">
                    <img src={logo} className='logo' alt="Logo de GyL importaciones" />
                </Link>
            </div>
            <div className='col'>
                <ul className='categorias'>
                    <li>
                        <Link to="/category/indumentaria" className='subrayado'>Indumentaria</Link>
                    </li>
                    <li>
                        <Link to="/category/accesorios" className='subrayado'>Accesorios</Link>
                    </li>
                    <li>
                        <Link to="/category/estilo-de-vida" className='subrayado'>Estilo de vida</Link>
                    </li>
                </ul>
            </div>
            <div className='d-flex col h-100 justify-content-end'>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar