import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import getProducts from '../../data/products.js'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ saludo }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    getProducts()
      .then((data) => {
        setProducts(data)
      })

  }, [])

  console.log(products)

  return (
    <>
      <div className='row contenedorSaludo'>
        <div className='col-12 mt-2'>
          <h2 className="saludo">{saludo}</h2>
        </div>
      </div>
      <div className='row mt-2'>
        <ItemList products={products} />
      </div>
    </>
  )
}

export default ItemListContainer