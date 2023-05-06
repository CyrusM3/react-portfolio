const Skills = () => {
  return (
    <>
      <section className='skills section' id='skills'>
        <h2 className='section-title'>Familiar Skills</h2>

        <div className='skills__container bd-grid'>
          <div className='skills__content'>
            {/* <h3 className='skills__subtitle'>Frontend</h3> */}

            <div className='skills__data'>
              <span className='skills__name'>Html</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__html'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>CSS</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__css'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>Javascript</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__js'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>React</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__react'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>Playwright Test Automation</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__playwright'></span>
            </div>
          </div>

          <div className='skills__content'>
            {/* <h3 className='skills__subtitle'>Backend</h3> */}

            <div className='skills__data'>
              <span className='skills__name'>Git/GitHub/GitLab</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__php'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>Node js</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__node'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>Mongo DB</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__mongoDB'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>MySQL</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__mySQL'></span>
            </div>

            <div className='skills__data'>
              <span className='skills__name'>Tailwind CSS</span>
              <span className='skills__number'></span>
              <span className='skills__bar skills__tailwing'></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;
