import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import NavBar from '../src/components/navBar/navBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import CartContainer from '../src/components/cart/CartContainer'
import ItemDetailContainer from './components/detail/ItemDetailContainer.js';
import NotFound from './components/not found/NotFound.js';
import CartContextProvider from './components/context/CartContext';
import Example from './components/buyer/Example.js';

import './App.css';
import Footer from './components/footer/Footer.js';


function App() {
  return (
    <BrowserRouter>
      <div className='cont'>
        <div className='cont1'>
          <CartContextProvider>
            <NavBar />  
            <Routes>
              <Route path='/' element= {<ItemListContainer />}/>
              <Route path='/categoria/:id' element= {<ItemListContainer />}/>
              <Route path='/detail/:detalleId' element= {<ItemDetailContainer/>} /> 
              <Route path="/cart" element = { <CartContainer /> } />
              <Route path='/finalizarCompra' element = {<Example/>} />
              <Route path='/notFound' element={<NotFound/>}/>
              <Route path='/*' element= {<Navigate to='/notFound' replace/>} />
            </Routes>
          </CartContextProvider>
        </div>

      </div>
  </BrowserRouter>
  )
}

export default App;
