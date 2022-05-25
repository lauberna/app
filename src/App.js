import NavBar from '../src/components/navBar/navBar.js';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import CartContainer from '../src/components/cart/CartContainer'
import ItemDetailContainer from './components/detail/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NotFound from './components/not found/NotFound.js';


function App() {
  return (
    <BrowserRouter>

    <NavBar />  
    <Routes>
      <Route path='/' element= {<ItemListContainer />}/>
      <Route path='/categoria/:id' element= {<ItemListContainer />}/>
      <Route path='/detail/:detalleId' element= {<ItemDetailContainer/>} /> 
      <Route path="/cart" element = { <CartContainer /> } />
      <Route path='/notFound' element={<NotFound/>}/>

      <Route path='/*' element= {<Navigate to='/notFound' replace/>} />

    </Routes>

  </BrowserRouter>
  )
}

export default App;
