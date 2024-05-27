import React, { useRef } from "react";
import "../../App.css";
import contact from "../../assets/contact.jpg";


import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactVendeur() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_19qbkto', 'template_k5t01th', form.current, {
        publicKey: 'Jp8ioxpRWrAvT89ar',
      })
      .then(
        () => {
          toast.success('Le message a été envoyé avec succès');
          form.current.reset();
        },
        (error) => {
          toast.error(`Échec de l'envoi du message: ${error.text}`);
        },
      );
  };

  return (
    <div>
      <div className='contactus'>
        <img src={contact} style={{width:"1532px",height:"725px"}} alt="Contact" />
      </div>
      

      <div style={{
        position: "relative", top: "300px", left: "750px", backgroundColor: "#f1e9ee",
        width: "450px", height: "350px", marginLeft: "60px", marginTop: "30px",
        boxShadow: "0 4px 8px 0 white, 0 6px 20px 0 black "
      }}>
        <form ref={form} onSubmit={sendEmail}>
          <br />
          <div className="input-container">
            <input placeholder="Email" className="input-field" type="text" name="user_email" />
            <label htmlFor="input-field" className="input-label">
              Email
            </label>
            <span className="input-highlight" />
          </div>
          <br />
          <div className="input-container">
            <input placeholder="Message" className="input-field" type="textarea" name="message" />
            <label htmlFor="input-field" className="input-label">
              Message
            </label>
            <span className="input-highlight"></span>
          </div>
          <br /><br />
          <button className="button" style={{ marginLeft: "150px" }}>Envoyer</button>
          <br /><br />
        </form>
      </div>

      <ToastContainer />
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default ContactVendeur;
