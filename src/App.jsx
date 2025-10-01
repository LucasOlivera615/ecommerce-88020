import NavBar from './Components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <>
      <header>
        <h1>GyL Importaciones</h1>
        <div className='col-12'>
          <NavBar />
        </div>
      </header>
      <main>
        <ItemListContainer saludo={"Bienvenidos a mi ecommerce, GyL Importaciones"} />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
