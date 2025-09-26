import NavBar from './Components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {



  return (
    <>
      <h1>GyL Importaciones</h1>
      <NavBar />
      <ItemListContainer saludo={"Bienvenidos a mi ecommerce, GyL Importaciones"}/>
    </>
  )
}

export default App
