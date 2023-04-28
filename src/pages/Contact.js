import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Contact.module.css'


const Forum = () => {
    return (
        <div className='ForumPage'>
            <h2 className='nTitle'>Forum</h2>
            <Link to='/home'><button className='returnF'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <Link to=''>
                <button className='botonChat1'>
                    <img src='https://www.cuerpomente.com/medio/2019/07/03/semillas-de-chia-propiedades_76de1168_846x846.jpg' className='chat1Image' alt=''/>
                </button>
            </Link>
            <h3>Que piensan de la chia?</h3>
            <h5>Sabe a tierra con trigo pero es muy nutritiva segun los expertos de la DIAN</h5>
            <h4>Hace 3 días por Pirilover69</h4>
            <Link to=''>
                <button className='botonChat2'>
                    <img src='https://lamenteesmaravillosa.com/wp-content/uploads/2015/04/acosador.jpg' className='chat2Image' alt=''/>
                </button>
            </Link>
            <h3>AYUDA!</h3>
            <h5>Hay un acosador en mi gimnasio. Siempre que volteo, esta ahi mirandome seductoramente. Que hago?</h5>
            <h4>Hace 4 días por ChicoPlay</h4>
            <Link to=''>
                <button className='BotonPublicar'>
                    <h3>Publicar</h3>
                </button>
            </Link>

            
        </div>
    )
}
export default Forum;