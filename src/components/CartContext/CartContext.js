import React, {createContext, useState} from 'react'

const Context = createContext();

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        console.log(isInCart(item))
        if (isInCart(item)) {
            updateItem(item, quantity)
        }
        else{
            setCart([...cart, {...item, quantity}])
        }
        console.log(cart)
    }

    const removeItem = (item) => { setCart(cart.filter(cartItem => cartItem.id !== item.id)) }

    const clear = () => { setCart([]) }

    const isInCart = (item) => { return cart.some((i) => i.id === item.id)}

    const updateItem = (item, quantity) => {
        cart.forEach((i) => {
            if (i.id == item.id){
                i.quantity += quantity
            }
        })
    }

    return (
        <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </Context.Provider>
    )

}

export default Context