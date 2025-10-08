import './CartWidget.css'
import carrito from '../../Assets/img/carrito-gyl-importaciones-1.2.png'

const CartWidget = () => {
  return (
    <div className='carritoContainer'>
        <img src={carrito} className='carrito' alt="Logo del carrito de compras." />
        <p className='m-0'>1</p>
    </div>
  )
}

export default CartWidget