import './ItemCard.css'

const ItemCard = ({ product }) => {
    return (
        <div className="col-3 m-1 p-0 tarjeta">
            <h2>{product.nombre}</h2>
            <p>Precio: {product.precio}</p>
            <p>Descripción: {product.descripcion}</p>
            <p>Disponible: {product.stock}</p>
        </div>
    )
}

export default ItemCard