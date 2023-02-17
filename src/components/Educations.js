const Educations = () => {
  return (
    <>
      <section className='education section'>
        <h2 className='section-title'>Education</h2>

        <div className='education__container bd-grid'>
          <div className='education__content'>
            <div>
              <h3 className='education__year'>2021 - 2022</h3>
              <span className='education__university'>Focus College</span>
            </div>

            <div className='education__time'>
              <span className='education__rounder'></span>
              <span className='education__line'></span>
            </div>

            <div>
              <h3 className='education__race'>Advanced Software Certificate</h3>
              <span className='education__specialty'>Software Development</span>
            </div>
          </div>

          <div className='education__content'>
            <div>
              <h3 className='education__year'>2012 - 2015</h3>
              <span className='education__university'>Camosun College</span>
            </div>

            <div className='education__time'>
              <span className='education__rounder'></span>
              <span className='education__line'></span>
            </div>

            <div>
              <h3 className='education__race'>Electronics Engineering</h3>
              <span className='education__specialty'>
                Computer & Electronics
              </span>
            </div>
          </div>

          <div className='education__content'>
            <div>
              <h3 className='education__year'>2011 - 2012</h3>
              <span className='education__university'>Camosun College</span>
            </div>

            <div className='education__time'>
              <span className='education__rounder'></span>
              <span className='education__line'></span>
            </div>

            <div>
              <h3 className='education__race'>Network Certificate</h3>
              <span className='education__specialty'>Network</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Educations;
