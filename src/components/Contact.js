import React, { useState } from 'react';
import './Contact.css'; // Assuming you want to keep styles separate

const Contact = () => {
  // State to display success message
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwKZ19TtfLAA4wrW1SiL2p-0tXlMIlcXXq14GG0FMZQyCeu3dNEOcjTVwbGkfAjHHqJ/exec';
    const form = e.target;

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        setMessage('Message sent successfully');
        setTimeout(() => setMessage(''), 5000);
        form.reset();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <div className="contact-content" id="contact">
      <div className="container">
        <div className="contact-title">
          <h4>Contact Me</h4>
          <p>Get In Touch</p>
        </div>
        <div className="contact">
          <form name="formdata" onSubmit={handleSubmit}>
            <input type="text" name="NAME" placeholder="Name" required />
            <input type="email" name="EMAIL" placeholder="Email" required />
            <input type="text" name="SUBJECT" placeholder="Subject" />
            <textarea name="MESSAGE" placeholder="Message"></textarea>
            <input type="submit" value="Send Message" className="submit" />
          </form>
          <span id="msg">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
