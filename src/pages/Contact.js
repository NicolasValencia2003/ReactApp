import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'


const Forum = () => {

    return (
        <div className='ForumPage'>
            <h2 className='nTitle'>Forum</h2>
            <Link to='/home'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <Link to=''>
                <button className='botonChat1'>
                    <img src='https://www.cuerpomente.com/medio/2019/07/03/semillas-de-chia-propiedades_76de1168_846x846.jpg' className='chat1Image' alt=''/>
                </button>
            </Link>
            <h4>Que piensan de la chia?</h4>
            <p>Sabe a tierra con trigo pero es muy nutritiva segun los expertos de la DIAN</p>
            <p>Hace 3 días por Pirilover69</p>
            <Link to=''>
                <button className='botonChat2'>
                    <img src='https://lamenteesmaravillosa.com/wp-content/uploads/2015/04/acosador.jpg' className='chat2Image' alt=''/>
                </button>
            </Link>
            <h4>AYUDA!</h4>
            <p>Hay un acosador en mi gimnasio. Siempre que volteo, esta ahi mirandome seductoramente. Que hago?</p>
            <p>Hace 4 días por ChicoPlay</p>
            <Link to='/post'>
                <button className='BotonPublicar'>
                    <p className='insidePub'>Crear Peticion</p>
                </button>
            </Link>

            
        </div>
    )
}
export default Forum;