import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
          console.log('message sent');
        },
        (error) => {
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
              />
              <input
                type='email'
                placeholder='Email'
                className='contact__input'
                name='user_email'
              />
            </div>

            <input
              type='text'
              placeholder='Project'
              className='contact__input'
              name='user_project'
            />

            <textarea
              name='message'
              id=''
              cols='0'
              rows='10'
              placeholder='Message'
              className='contact__input'
            ></textarea>

            <input
              type='submit'
              value='Send Message'
              className='button contact__button'
            />
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
