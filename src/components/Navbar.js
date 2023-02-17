import { pageLinks } from '../data';

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

            <ul className='nav__list'>
              {pageLinks.map((link) => {
                const { id, href, text } = link;
                return (
                  <li className='nav__item' key={id}>
                    <a href={href} className='nav__link'>
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
