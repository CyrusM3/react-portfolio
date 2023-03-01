import { socialLinks } from '../data';

const Footer = () => {
  return (
    <>
      <footer className='footer section'>
        <div className='footer__container bd-grid'>
          <h1 className='footer__title'>Ali</h1>
          <p className='footer__description'>Keep in touch here!</p>

          <div className='footer__social'>
            {socialLinks.map((link) => {
              const { id, href, icon } = link;

              return (
                <a
                  key={id}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  className='home__social-link'
                >
                  <i className={icon}></i>
                </a>
              );
            })}
          </div>
          <p className='footer__copy'>
            All right reserved by Ali - {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
