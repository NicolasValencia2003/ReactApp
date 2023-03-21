import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Nutrition = () => {
    return (
        <div className='NutritionPage'>
            <h2 className='nTitle'>Nutrition</h2>
            <Link to='/home'><button className='return'><img src='https://icons.veryicon.com/png/o/miscellaneous/energy-system-icon/return-57.png' className='returnImage' alt=''/></button></Link>
            <Link to=''>
                <button className='botonBreakfast'>
                    <label className='textB'>Desayuno</label>
                    <img src='https://www.clara.es/medio/2022/09/12/desayunos-saludables-recetas_aba20e3d_1200x630.jpg' className='breakfastImage' alt=''/>
                </button>
            </Link>
            <Link to=''>
                <button className='botonLunch'>
                    <label className='textL'>Almuerzo</label>
                    <img src='https://www.nzherald.co.nz/resizer/tNLjoVjJkQq4eJem7yVs-pqdvDE=/640x0/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/62VFY3XV44LRBWMTE7HDJNA26Y.jpg' className='lunchImage' alt=''/>
                </button>
            </Link>
            <Link to=''>
                <button className='botonSnack'>
                    <label className='textS'>Merienda</label>
                    <img src='https://vidayestilo.mx/wp-content/uploads/2018/07/shutterstock_463188530.jpg' className='snackImage' alt=''/>
                </button>
            </Link>
            <Link to=''>
                <button className='botonDinner'>
                    <label className='textD'>Comida</label>
                    <img src='https://www.recetasnestle.com.co/sites/default/files/2022-06/ingredientes-comida-de-mar-parrilla.jpg' className='dinnerImage' alt=''/>
                </button>
            </Link>
        </div>
    )
}
export default Nutrition;