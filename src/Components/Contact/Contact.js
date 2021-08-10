import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.scss';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };
  const notify = () => toast.success('Message sent!');
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactme.png" alt="contact" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}
