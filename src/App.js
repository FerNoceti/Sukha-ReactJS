import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Componentes
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Consolas from './Consolas/Consolas'
import Perifericos from './components/Perifericos/Perifericos'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/equiposynotebooks' element={<ItemListContainer title={'Equipos y Notebooks'} buscar={'computadoras%20notebooks'}/>} />
                <Route exact path='/consolasdevideojuego' element={<Consolas/>} />
                <Route exact path='/perifericos' element={<Perifericos/>} />
                <Route exact path='/product/:id' element={<ItemDetailContainer/>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
