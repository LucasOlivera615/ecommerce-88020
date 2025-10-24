import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {



  return (
    <>
      <BrowserRouter>
        <header className='container-fluid m-0 p-0'>
          <h1>GyL Importaciones</h1>
          <div className='col-12 mb-2'>
            <NavBar />
          </div>
        </header>
        <main className='container'>
          <ItemListContainer destacados={"Productos destacados."} />
          <ItemDetailContainer />
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
