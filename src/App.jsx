import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {



  return (
    <>
      <header className='container-fluid m-0 p-0'>
        <h1>GyL Importaciones</h1>
        <div className='col-12 mb-2'>
          <NavBar />
        </div>
      </header>
      <main className='container'>
        <ItemListContainer destacados={"Productos destacados."} />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
