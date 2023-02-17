import PageLinks from './PageLinks';

const Navbar = () => {
  return (
    <>
      <header className='l-header'>
        <nav className='nav bd-grid'>
          <div className='nav__toggle' id='nav-toggle'>
            <i className='bx bx-menu'></i>
          </div>

          <div>
            <a href='#home' className='nav__logo'>
              Ali
            </a>
          </div>

          <div className='nav__menu' id='nav-menu'>
            <div className='nav__close' id='nav-close'>
              <i className='bx bx-x'></i>
            </div>
            <PageLinks />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
