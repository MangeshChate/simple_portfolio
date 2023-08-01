import React, { useRef, useState } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context.js';
import { useContext } from 'react';
import wa from '../../img/pngtree-whatsapp-mobile-software-icon-png-image_6315991 (1).png'
import email from '../../img/584856bce0bb315b0f7675ad.png'
export default function Contact() {

  const theme =  useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

    const formRef = useRef();
    const [done  , setDone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wad1uqb', 'template_sxovywc', formRef.current, 'zZFALP4bkPVP94DTX')
            .then((result) => {
                console.log(result.text);
                setDone(true);
                alert('Message sent successfully !')
            }, (error) => {
                console.log(error.text);
            });
        

    }

    return (
        <div className='c section' id="section4">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={wa} alt="" className="c-icon" />
                            +91 8767094645
                        </div>
                        <div className="c-info-item">

                            <img src={email} alt="" className="c-icon" />
                            mbchate08 gmail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b>
                        <span style={{ color: '#59b256' }}>

                            Get in touch. Always freelancing if the right project comes along.
                        </span>
                    </p>
                    <form action="" ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && "#252525"}} type="text" placeholder='Name' name="user_name" />
                        <input style={{backgroundColor:darkMode && "#252525"}} type="text" placeholder='subject' name="user_subject" />
                        <input style={{backgroundColor:darkMode && "#252525"}} type="email" placeholder='Email' name="user_email" />
                        <textarea style={{backgroundColor:darkMode && "#252525"}} name="message" placeholder='Message' rows="5" />
                        <button>Submit</button>
                        {done && "  Thank you !"}
                    </form>
                </div>
            </div>
        </div>
    )
}
