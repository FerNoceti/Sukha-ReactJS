import React, {createContext, useState} from 'react'

const Context = createContext();

export function UserContextProvider({children}) {

    const [user, setUser] = useState(null)

    const createUser = (name, surname, mail, phone) => {
        setUser({name, surname, mail, phone})
    }

    const cleanUser = () => {
        setUser(null)
    }

    return (
        <Context.Provider value={{ user, createUser, cleanUser }}>
            {children}
        </Context.Provider>
    )

}

export default Context