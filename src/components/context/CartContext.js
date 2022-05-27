import React from 'react'
import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

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
        } else {
            alert("producto agregado")

            setCartList([
                ...cartList,
                item]);
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
    }

    const deleteCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value = { {
            cartList,
            addToCart,
            deleteItem,
            deleteCart
        } }>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider