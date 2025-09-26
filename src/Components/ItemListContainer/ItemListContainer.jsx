import './ItemListContainer.css'

const ItemListContainer = ({saludo}) => {
  return (
    <div className='contenedorSaludo'>
        <h2 className="saludo">{saludo}</h2>
    </div>
  )
}

export default ItemListContainer