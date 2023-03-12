import React from 'react'
import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_np40pkg', 'template_g8g89r7', form.current, 'dY0pOOdlS64Wgj1XQ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-us">
       <div className="left-j">
        <hr />
        <div>
            <span className='stroke-text'>Ready to</span>
            <span>Level up</span>
        </div>
        <div>
            <span>Your body</span>
            <span className='stroke-text'>With us?</span>
        </div>
       </div>

       <div className="right-j">
        <form ref={form}  className="email-container" onSubmit={sendEmail}>
            <input type="email" 
             name="user_email" placeholder="Enter your email address"/>
            <button  className='btn btn-join'>
                Join Now
            </button>
        </form>

       </div>
    </div>
  )
}

export default Join