import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import getProducts from '../../data/products.js'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ destacados }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data)
      })

  }, [])

  console.log(products)

  return (
    <section>
      <div className='row contenedorDestacados'>
        <div className='col-12 mt-2'>
          <h2 className="destacados">{destacados}</h2>
        </div>
      </div>
      <div className='row mt-2'>
        <ItemList products={products} />
      </div>
    </section>
  )
}

export default ItemListContainer