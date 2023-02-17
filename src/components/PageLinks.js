import { pageLinks } from './../data';

const PageLinks = () => {
  return (
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
  );
};
export default PageLinks;
