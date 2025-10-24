import {useState, useEffect} from "react"
import getProducts from "../../data/products.js"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer() {

  const [product, setProduct] = useState({})

  useEffect(() => {

    getProducts()
      .then((data) => {
        const dataProduct = data.find((product)=> product.id === 1)
        setProduct(dataProduct)
      })

  }, [])

  console.log(product)

  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer