import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div>
        <img src={product.imagen} alt="Imagen del producto." />
        <h2>{product.nombre}</h2>
        <p className="productoTexto">{product.descripcion}</p>
        <p className="productoTexto">Precio: ${product.precio}</p>
        <p className="productoTexto">Tipo: {product.clase}</p>
        <p className="productoTexto">Unidades en stock: {product.stock}</p>
    </div>
  )
}

export default ItemDetail