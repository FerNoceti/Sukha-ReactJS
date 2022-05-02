import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Home.css"
import { Carousel } from 'react-responsive-carousel'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function Home() {
    return (
        <div className='home'>
            <Carousel showThumbs={false} autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showStatus={false} transitionTime={1000}>
                    <div className='home__diapositiva'>
                        <span className='home__titulo'>Bienvenido a</span>
                        <img src='https://i.imgur.com/Nx7nbWd.png' alt='bienvenido a sukha' style={{width: "50%"}}/>
                        <p className='home__p'>Explora todos nuestros productos</p>
                    </div>
                    <div className='home__diapositiva'>
                        <span className='home__titulo'>Equipos y Notebooks</span>
                        <img src='https://i.imgur.com/i5k1COb.png' alt='Equipos y notebooks' style={{width: "30%"}}/>
                        <p className='home__p'>Contamos con equipos y Notebooks de primera calidad</p>
                    </div>
                    <div className='home__diapositiva'>
                        <span className='home__titulo'>Consolas de Video Juego</span>
                        <img src='https://i.imgur.com/RIafc2a.png' alt='Consolas de Video Juego' style={{width: "20%"}}/>
                        <p className='home__p'>Encontrá las últimas consolas aquí</p>
                    </div>
                    <div className='home__diapositiva'>
                        <span className='home__titulo'>Periféricos</span>
                        <img src='https://i.imgur.com/yl0KpfW.png' alt='perifericos' style={{width: "25%"}}/>
                        <p className='home__p'>Mejorá tu experiencia con Periféricos de gama alta</p>
                    </div>
                </Carousel>
                <div className='home__items'>
                    <ItemListContainer title={'Nuestros Productos'} categoryId={null}/>
                </div>
        </div>
    )
}

export default Home