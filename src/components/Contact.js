import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const successNotify = () =>
  toast.success('Message Sent!', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const errorNotify = () =>
  toast.error('Message failed!', {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_atn11rc',
        'template_z204d0b',
        form.current,
        'mfJ_yeqMBP1a_4Irn'
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          successNotify();
          console.log('message sent');
        },
        (error) => {
          errorNotify();
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section className='contact section' id='contact'>
        <h2 className='section-title'>Contact Info</h2>
        <div className='contact__container bd-grid'>
          <form onSubmit={sendEmail} ref={form} className='contact__form'>
            <div className='contact__inputs'>
              <input
                type='text'
                placeholder='Name'
                className='contact__input'
                name='user_name'
                required
              />
              <input
                type='email'
                placeholder='Email'
                className='contact__input'
                name='user_email'
                required
              />
            </div>

            <input
              type='text'
              placeholder='Project'
              className='contact__input'
              name='user_project'
              required
            />

            <textarea
              name='message'
              id='message'
              cols='0'
              rows='10'
              placeholder='Message'
              className='contact__input'
              required
            ></textarea>

            <button
              type='submit'
              value='Send Message'
              className='button contact__button'
            >
              Send Message
            </button>
            <ToastContainer />
          </form>

          <div className='contact__info'>
            <div className='contact__info'>
              <h3 className='contact__subtitle'>Call me</h3>
              <span className='contact__text'>(250) - 661 - 9081</span>
            </div>

            <div className='contact__info'>
              <h3 className='contact__subtitle'>E-mail</h3>
              <span className='contact__text'>alx.ebrahimi@gmail.com</span>
            </div>

            <div className='contact__info'>
              <h3 className='contact__subtitle'>Location</h3>
              <span className='contact__text'>North Vancouver</span>
              <span className='contact__text'>BC - Canada</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
