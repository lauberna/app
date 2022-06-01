import React from 'react'
import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])
    const [cantidad, setCantidad] = useState();
    const [precio, setPrecio] = useState();
    const [precioTotal, setPrecioTotal] = useState(0);
    const [productosTotales, setProductosTotales] = useState(0);

    function isInCart(id) {
        return cartList.some(el => el.id === id);
    }
    function addToCart(item) {
        if (isInCart(item.id)) {
            alert("ya agregaste este producto")
            let i = cartList.findIndex(el => el.id === item.id);
            const newCartList = cartList;
            newCartList[i].quantity += item.quantity;
            setCartList(newCartList);
            actualizarCarrito();
        } else {
            setCartList([
                ...cartList,item]);
                actualizarCarrito()
                console.log('producto agregado al carrito')
                console.log(item)
                
                
        }
    }

    // function addToCart(item){
    //     if(cartList.some(article => article.id === item.id)){
    //        const newCart = cartList.map(article => {
    //            if(article.id === item.id) {
    //                article.count = item.count + article.count;
    //            }
    //            return article;
    //        })
    //     setCartList(newCart);

    //     }
    //     else {
    //         setCartList([
    //             ...cartList,
    //             item
    //         ])
    //     }
    // }

    const deleteItem = (id) => {
        const newCart = [...cartList];
        let index = newCart.findIndex((product) => product.id ===id);
        newCart.splice(index,1);

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
    


    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteItem,
            deleteCart,
            actualizarCarrito,
            precioTotal,
            setPrecioTotal,
            setProductosTotales,
            productosTotales,
            aumentar,
            disminuir
            
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider