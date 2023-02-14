import emailjs from "emailjs-com";
import React, { useRef, useState } from 'react';

const Contact = () => {

  const [loading, setLoading] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID
    )
      .then((result) => {
        alert("Sent")
        setLoading(false)
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact" className="d-flex justify-content-center align-items-center vh-100">

      <div className="card p-3 bg-light" style={{ minWidth: '18rem', width: '50vw' }}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full name</label>
            <input type="text" className="form-control" id="fullName" placeholder="Your full name..." name="fullname" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Your email..." name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea type="email" className="form-control" id="message" placeholder="Your message..." name="message" required />
          </div>
          {loading ?
            <div class="spinner-border ms-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            :
            <button type="submit" className="btn btn-outline-danger p-2 px-5 rounded-5">
              Send
            </button>
          }
        </form>
      </div>
    </div>
  )
}

export default Contact