import {createContext, useContext, useState} from 'react'
import { addDoc, collection, getFirestore} from "firebase/firestore";
import swal from 'sweetalert'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

  const [cartList, setCartList] = useState([])
  const [cantidad, setCantidad] = useState()
  const [precioTotal, setPrecioTotal] = useState(0);
  const [productosTotales, setProductosTotales] = useState(0);

  function isInCart(id) {
    return cartList.some(el => el.id === id);
  }
  function addToCart(item) {
    if (isInCart(item.id)) {
      let i = cartList.findIndex(el => el.id === item.id);
      const newCartList = cartList;
      newCartList[i].quantity += item.quantity;
      setCartList(newCartList);
      actualizarCarrito();
      } else {
          setCartList([...cartList,item]);
          actualizarCarrito()
        }
  }
  const deleteItem = (id) => {
    const newCart = [...cartList]
    let index = newCart.findIndex((product) => product.id ===id)
    newCart.splice(index,1)
    setCartList([...newCart])
    actualizarCarrito()
  }

  const deleteCart = () => {
    setCartList([])
  }

  function disminuir(product) { 
    if (product.count > 0) {
      setCantidad(product.count--)
      actualizarCarrito();
    }
        
  }
    
  function aumentar(product) {
    if(product.count == product.stock){
    }else{
      setCantidad(product.count++);
      actualizarCarrito();
    }
  }

  function actualizarCarrito() {
    setPrecioTotal(cartList.map(element => element.cantidad*element.precio).reduce((anterior, siguiente) => anterior + siguiente, 0));
    setProductosTotales(cartList.map(element => element.cantidad).reduce((anterior, siguiente) => anterior + siguiente, 0))
  }
  
  const [buyId, setBuyId] = useState({})

  function order(precioTotal, mail, name, cartList, number, locality, coment){
    let buyOrder = {}
    buyOrder.buyer = {name: name, mail: mail, phone: number, locality: locality}
    buyOrder.coment = coment
    buyOrder.total= precioTotal
    buyOrder.items = cartList.map(product => {
      const name = product.name
      const priceU = product.price
      const amount = product.count

      return { name, priceU, amount }
    })
  
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, buyOrder)
    .then(respuesta => setBuyId(respuesta.id.toString()))
    .catch(err => console.log(err))
    .finally(
      swal({
        title: "Compra realizada!",
        text: `numero de orden: ${buyId}`,
        icon: "success",
      }),
      deleteCart()
    )     
    console.log(buyOrder)
  }

  const cantidadTotal = ()=> {
    return cartList.reduce ((contador,prod)=> contador += prod.quantity,0)
  }


  return (
    <CartContext.Provider value = { {
      cartList,
      addToCart,
      deleteItem,
      deleteCart,
      actualizarCarrito,
      setPrecioTotal,
      setProductosTotales,
      aumentar,
      disminuir,
      order,
      productosTotales,
      precioTotal,
      cantidadTotal
        }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider