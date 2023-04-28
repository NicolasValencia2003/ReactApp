import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css'


const Profile = () => {
    return (
        <div className='ProfilePage'>
            <h2 className='nTitle'>Profile</h2>
            <Link to=''><button className='avatarButtom'><img src='https://img.freepik.com/free-icon/avatar_318-158392.jpg' className='AvatarImage' alt=''/></button></Link>
            <h3>User Name</h3>
            <h4>RandomUser123</h4>
            <h3>Description</h3>
            <h4>Hola soy nuevo en el gimnasio, espero aprender mucho y mejorar en mis ejercicios de pierna</h4>
            

        </div>
    )
}
export default Profile;