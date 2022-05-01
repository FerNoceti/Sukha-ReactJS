import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Componentes
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Consolas from './components/Consolas/Consolas'
import Perifericos from './components/Perifericos/Perifericos'
import Notebook from './components/Notebooks/Notebooks'
import Cart from './components/Cart/Cart'
import { CartContextProvider } from './components/CartContext/CartContext'
import User from './components/User/User'
import { UserContextProvider } from './components/UserContext/UserContext'

function App() {

  return (
    <div className="App">
        <CartContextProvider>
          <UserContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/equiposynotebooks' element={<Notebook/>} />
                <Route exact path='/consolasdevideojuego' element={<Consolas/>} />
                <Route exact path='/perifericos' element={<Perifericos/>} />
                <Route exact path='/product/:id' element={<ItemDetailContainer/>} />
                <Route exact path='/cart' element={<Cart/>} />
                <Route exact path='/user' element={<User/>} />
            </Routes>
        </BrowserRouter>
          </UserContextProvider>
        </CartContextProvider>
        <Footer/>
    </div>
  );
}

export default App;
