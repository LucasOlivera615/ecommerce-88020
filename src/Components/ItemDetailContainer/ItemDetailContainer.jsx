import {useState, useEffect} from "react"
import getProducts from "../../data/products.js"
import ItemDetail from "../ItemDetail/ItemDetail"
import Cargando from '../Cargando/Cargando'
import { useParams } from "react-router-dom"

function ItemDetailContainer() {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    setLoading(true)

    getProducts()
      .then((data) => {
        const dataProduct = data.find((product)=> product.id === parseInt(id))
        setProduct(dataProduct)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return (
    <div>
      {
        loading ? <Cargando />: <ItemDetail product={product}/>
      }
    </div>
  )
}

export default ItemDetailContainer