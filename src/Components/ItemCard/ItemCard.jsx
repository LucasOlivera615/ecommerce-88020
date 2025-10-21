import './ItemCard.css'

const ItemCard = ({ product }) => {
    return (
        <article className="col-3 m-3 p-0 tarjeta">
            <div className='row w-100 m-0 contenedorTitutlo'>
                <div className='col-12 p-0 titulo'>
                    <h2 className='m-0'>{product.nombre}</h2>
                </div>
            </div>
            <div className='row align-items-center justify-content-center w-100 m-0'>
                <div className='d-flex align-items-center justify-content-center col-12 w-100 p-0 contenedorImgProducto'>
                    <img src={product.imagen} className='w-100' alt="Imagen del producto" />          
                </div>
            </div>
            <div className='d-flex row w-100 ms-3 mb-2 mt-2 contenedorCaracteristicas'>
                <div className='col-12 p-0'>
                    <p className='mb-3 text-start'><strong>Precio:</strong> ${product.precio}</p>
                </div>
                <div className='col-12 p-0'>
                    <p className='mb-3 text-start'><strong>Tipo:</strong> {product.clase}</p>
                </div>
                <div className='col-12 p-0'>
                    <p className='mb-3 text-start'><strong>Disponible:</strong> {product.stock}</p>
                </div>
            </div>
        </article>
    )
}

export default ItemCard