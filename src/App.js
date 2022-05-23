import NavBar from '../src/components/navBar/navBar.js';
import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import Cart from '../src/components/cart/Cart'
import ItemDetailContainer from './components/detail/ItemDetailContainer.js';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>

    <NavBar />  
    <Routes>
      <Route path='/' element= {<ItemListContainer />}/>
      <Route path='/categoria/:id' element= {<ItemListContainer />}/>
      <Route path='/detail/:detalleId' element= {<ItemDetailContainer/>} /> 
      <Route path="/cart" element = { <Cart /> } />

      <Route path='/*' element= {<Navigate to='/' replace/>} />

    </Routes>

  </BrowserRouter>
  )
}

export default App;
