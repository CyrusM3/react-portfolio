const Contact = () => {
  return (
    <>
      <section className='contact section' id='contact'>
        <h2 className='section-title'>Contact Info</h2>
        <div className='contact__container bd-grid'>
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
