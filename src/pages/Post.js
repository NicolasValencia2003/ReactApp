import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Post.css'

const Post = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sj9ztjm', 'template_i9tlpkk', form.current, 'rRAMV-p6VDvgyVrWm')
        .then((result) => {
              console.log(result.text);
        }, (error) => {
              console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className='field'>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
        
    )
}
export default Post;