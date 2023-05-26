// import heroImage from '../images/ali.png';
// import { contactInfo } from '../data.js';

const About = () => {
  return (
    <>
      <section className='about section' id='about'>
        <h2 className='section-title'>About Me</h2>
        <div className='about__container bd-grid'>
          <div className='about__data'>
            <p className='about__text'>
              Hi, I'm a frontend developer located in Vancouver Canada. As a
              developer, I possess a strong understanding of web development
              technologies, with a particular emphasis on HTML, CSS, and
              JavaScript. I have a keen eye for design and are able to transform
              mockups and wireframes into engaging, intuitive user interfaces
              that meet client needs and drive user engagement. My experience as
              a frontend developer has enabled me to develop strong skills in
              responsive design and mobile-first development, allowing me to
              create web applications that are accessible and user-friendly on a
              wide range of devices.
            </p>

            <p className='about__text'>
              Additionally, I have experience with frontend framework such as
              React, as well as experience with backend technologies like
              Node.js. I am passionate about web development and enjoy staying
              up-to-date with the latest trends and technologies in the
              industry.Overall, my passion for web development, and technical
              expertise, make me a valuable asset to any team.
            </p>
          </div>

          <div>
            {/* will be removed later */}
            {/* <div className='about__information'>
              <h3 className='about__information-title'>Information</h3>
              {contactInfo.map((information) => {
                const { id, icon, info } = information;
                return (
                  <div className='about__information-data' key={id}>
                    <i className={`${icon} about__information-icon`}></i>
                    <span>{info}</span>
                  </div>
                );
              })}
            </div> */}

            <div className='about__information'>
              <h2 className='about__information-title'>Experience</h2>

              <div className='about__information-data'>
                <i className='bx bx-medal about__information-icon'></i>
                <div>
                  <span className='about__information-subtitle'>
                    1 Year Job
                  </span>
                  <span className='about__information-subtitle-small'>
                    Experience
                  </span>
                </div>
              </div>

              <div className='about__information-data'>
                <i className='bx bx-briefcase-alt about__information-icon'></i>
                <div>
                  <span className='about__information-subtitle'>
                    6 Projects
                  </span>
                  <span className='about__information-subtitle-small'>
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
