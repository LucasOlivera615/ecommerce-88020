import AccionesCarrito from '../AccionesCarrito/AccionesCarrito'
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
  return (
    <article className="mt-5">
      <div className="row align-items-stretch">
        <div className="col-5 p-0 m-0 d-flex contenedorImagenDetallesProducto">
          <img src={product.imagen} alt="Imagen del producto." className="" />
        </div>
        <div className="col-7 p-0">
          <div className="ms-5 h-100 d-flex flex-column">
            <h2>{product.nombre}</h2>
            <div className="d-flex flex-column justify-content-center flex-grow-1">
              <p className="productoTexto descripcionProducto">{product.descripcion}</p>
              <p className="productoTexto">Precio: ${product.precio}</p>
              <p className="productoTexto">Tipo: {product.clase}</p>
              <AccionesCarrito stock={product.stock}/>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 filaStockContainer">
        <div className="col">
          <div className="d-flex ms-5 h-100 justify-content-start align-items-center">
            <h3 className="subtitulosDetalleProductos">Unidades en stock:</h3>
            <p className="textoStock">{product.stock}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail