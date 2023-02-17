import { projects } from '../data';

const Works = () => {
  return (
    <>
      <section className='works section' id='works'>
        <h2 className='section-title'>Projects</h2>

        <div className='works__container bd-grid'>
          {projects.map((project) => {
            const { id, image, site, icon, code, github, title } = project;

            return (
              <div className='works__img' key={id}>
                <img src={image} alt={title} />

                <div className='works__data'>
                  <a
                    href={site}
                    target='_blank'
                    rel='noreferrer'
                    className='works__link'
                  >
                    <i className={icon}></i>
                  </a>
                  <a
                    href={code}
                    target='_blank'
                    rel='noreferrer'
                    className='works__link'
                  >
                    <i className={github}></i>
                  </a>
                  <span className='works__title'>{title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Works;
