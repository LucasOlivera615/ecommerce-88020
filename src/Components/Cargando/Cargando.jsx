import logoCargando from '../../Assets/img/logo-de-carga.png'
import './Cargando.css'

function Cargando() {
  return (
    <div className='row contenedorLogoCargando'>
        <img src={logoCargando} className='logoCargando' alt='Logo de carga.'/>
        <h2 className='textoCargando'>Cargando...</h2>
    </div>
  )
}

export default Cargando