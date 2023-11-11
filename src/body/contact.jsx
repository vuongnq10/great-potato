"use client";

import { useState } from 'react';
import { send as sendMail } from 'api/contact';
import data from 'data';

const Index = () => {
  const [contact, setData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [success, setSuccess] = useState();
  const [loading, setLoad] = useState(false);

  const send = async () => {
    setLoad(true);
    try {
      const res = await sendMail(contact);
      if (res.success) {
        setSuccess('true');
        setData({ name: "", email: "", message: "", subject: "" });
      } else {
        setSuccess('false');
      }
    } catch (error) {
      setSuccess('false');
    } finally {
      setLoad(false);
    }

  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">

          <div className="col-md-6 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-map"></i>
              <h3>My Address</h3>
              <p>{data.place}</p>
            </div>
          </div>

          <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-share-alt"></i>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href={data.github} className="github"><i className="bi bi-github"></i></a>
                <a href={data.linkedin} className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-envelope"></i>
              <h3>Email Me</h3>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 d-flex align-items-stretch">
            <div className="info-box">
              <i className="bx bx-phone-call"></i>
              <h3>Call Me</h3>
              <p>{data.phone}</p>
            </div>
          </div>
        </div>

        <div className="php-email-form mt-4">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required
                value={contact.name}
                onChange={e => setData({ ...contact, name: e?.target?.value })}
              />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required
                value={contact.email}
                onChange={e => setData({ ...contact, email: e?.target?.value })}
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required
              value={contact.subject}
              onChange={e => setData({ ...contact, subject: e?.target?.value })}
            />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message" required
              value={contact.message}
              onChange={e => setData({ ...contact, message: e?.target?.value })}
            ></textarea>
          </div>
          <div className="my-3">
            {loading && (
              <div className="loading">Loading</div>
            )}
            {success && (
              <>
                {success == 'false' && <div className="error-message">Ops, Something went wrong !</div>}
                {success == 'true' && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </>
            )}
          </div>
          <div className="text-center"><button type="submit" onClick={() => !loading && send()}>Send Message</button></div>
        </div>

      </div>
    </section >
  );
};

export default Index;
