import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './contact.scss';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      email,
      message,
    };
    if (validateEmail(email) && message.length) {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you want to send this message?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              axios.post('/api/sendMail', dataToSubmit);
              notifySuccess();
            },
          },
          {
            label: 'No',
            onClick: () => console.log('nvm'),
          },
        ],
      });
    } else if (!validateEmail(email)) {
      notifyEmailError();
    } else if (!message.length) {
      notifyMessageError();
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === 'email') {
      setEmail(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const notifySuccess = () => toast.success('Message sent!');
  const notifyEmailError = () =>
    toast.error('Please enter a valid email address');
  const notifyMessageError = () =>
    toast.error('Please include content within the message box');

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contactme.jpeg" alt="contact" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}
