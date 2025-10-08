import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({ products }) => {
    return (
        <div className='row d-flex ms-5 align-items-center justify-content-start'>
            {
                products.map((product) => (
                    <ItemCard product={product} key={product.id}/>
                ))
            }
        </div>
    )
}

export default ItemList