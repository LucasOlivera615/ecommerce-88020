import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import getProducts from '../../data/products.js'
import ItemList from '../ItemList/ItemList'
import Cargando from '../Cargando/Cargando'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ destacados }) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoria } = useParams()

  useEffect(() => {

    setLoading(true)

    getProducts()
      .then((data) => {
        if (categoria) {
          const productsFilter = data.filter((product) => product.categoria === categoria)
          setProducts(productsFilter)
        }else{
          setProducts(data)
        }
      })
      .finally(() => {
        setLoading(false)
      })

  }, [categoria])

  return (
    <section>
      <div className='row contenedorDestacados'>
        <div className='col-12 mt-2'>
          <h2 className="destacados">{destacados}</h2>
        </div>
      </div>
      {
        loading ? <Cargando /> :  
        <div className='row mt-2'>
          <ItemList products={products} />
        </div>
      }
      
    </section>
  )
}

export default ItemListContainer