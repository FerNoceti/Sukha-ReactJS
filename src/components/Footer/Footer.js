import React from 'react'
import "./Footer.css"
import { BsFacebook, BsWhatsapp, BsGithub} from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <p className='footer__p'>
                Página diseñada por Fernando Noceti para el curso de ReactJS dictado por CoderHouse
            </p>
        </div>
        <div className='footer__container'>
            <span className='footer__title'>Mi Github</span>
            <a href='https://github.com/FerNoceti' className='footer__a' target="new"><BsGithub className='footer__github'/></a>
        </div>
        <div className='footer__container'>
            <span className='footer__title'>Contactanos</span>
            <div className='footer__redes'>
                <a className='footer__a' targer="new"><BsFacebook/></a>
                <a className='footer__a' targer="new"><AiFillInstagram/></a>
                <a className='footer__a' targer="new"><BsWhatsapp/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer