import React, {createContext, useState} from 'react'

const Context = createContext();

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([]);
    console.log(cart)
    const addItem = (item, quantity) => {setCart([...cart, {...item, quantity}])} 

    const removeItem = (item) => { setCart(cart.filter(cartItem => cartItem.id !== item.id)) }

    const clear = () => { setCart([]) }

    const isInCart = (id) => { return cart.find(item => item.id === id) }

    return ( 
        <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </Context.Provider>
    )

}

export default Context