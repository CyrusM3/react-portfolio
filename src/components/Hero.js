import heroImage from '../images/ali.png';
import { socialLinks } from '../data';

const Hero = () => {
  return (
    <>
      <main className='l-main'>
        <section className='home' id='home'>
          <div className='home__container bd-grid'>
            <div className='home__data'>
              <div className='home__img'>
                <img src={heroImage} alt='img' />
              </div>

              <h1 className='home__title'>Ali Ebrahimi</h1>
              <span className='home__profession'>
                Junior Frontend Developer
              </span>

              <div className='home__social'>
                {socialLinks.map((link) => {
                  const { id, href, icon } = link;
                  return (
                    <>
                      <a
                        key={id}
                        href={href}
                        target='_blank'
                        rel='noreferrer'
                        className='home__social-link'
                      >
                        <i className={icon}></i>
                      </a>
                    </>
                  );
                })}
              </div>

              <a
                download=''
                href='pdf/Ali_Ebrahimi_resume.pdf'
                className='button home__button'
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Hero;
