import './navbar.css'
import logo from '../../Assets/img/logo-gyl-importaciones-1.2.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {


    return (
        <nav className='container-fluid navBar'>
            <div className='col'>
                <img src={logo} className='logo' alt="Logo de GyL importaciones" />
            </div>
            <div className='col'>
                <ul className='categorias'>
                    <li><a href=''>Indumentaria</a></li>
                    <li><a href=''>Accesorios</a></li>
                    <li><a href=''>Estilo de vida</a></li>
                </ul>
            </div>
            <div className='d-flex col h-100 justify-content-end'>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar