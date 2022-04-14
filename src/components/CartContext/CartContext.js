import React, {useState} from 'react'

function CartContext({defaultValue, children}) {
  
    const [cart, setCart] = useState(defaultValue);

    const addItem = (item, quantity) => { !isInCart(item.id) && setCart([...cart, {...item, quantity}])} 

    const removeItem = (item) => { setCart(cart.filter(cartItem => cartItem.id !== item.id)) }

    const clear = () => { setCart([]) }

    const isInCart = (id) => { return cart.find(item => item.id === id) }

    return ( 
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext