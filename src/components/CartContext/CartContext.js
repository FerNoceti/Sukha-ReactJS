import React, {createContext, useState} from 'react'

const Context = createContext();

export function CartContextProvider({children}) {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item)) {
            updateItem(item, quantity)
        }
        else{
            setCart([...cart, {...item, quantity}])
        }
    }

    const removeItem = (id) => { setCart(cart.filter(
        (el) =>{
            return el.id !== id
        }
    )) }

    const clear = () => { setCart([]) }

    const isInCart = (item) => { return cart.some((i) => i.id === item.id)}

    const updateItem = (item, quantity) => {
        cart.forEach((i) => {
            if (i.id === item.id){
                i.quantity += quantity
            }
        })
    }

    const totalItems = () => {
        let total = 0;
        cart.forEach((i) => {
            total += i.quantity
        })
        return total
    }

    const totalPrice = () => {
        let total = 0;
        cart.forEach((i) => {
            total += i.price * i.quantity
        })
        return total
    }

    return (
        <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart, totalItems, totalPrice}}>
            {children}
        </Context.Provider>
    )

}

export default Context