import work1 from './images/gadgets.jpg';
import work2 from './images/jobTracker.jpg';
import work3 from './images/guessNumber.jpg';
import work4 from './images/notes.jpg';
import work5 from './images/hex.jpg';
import work6 from './images/game.jpg';

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'Home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },

  {
    id: 3,
    href: '#skills',
    text: 'skills',
  },
  {
    id: 4,
    href: '#works',
    text: 'work',
  },

  {
    id: 5,
    href: '#contact',
    text: 'contact',
  },
];

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.linkedin.com/in/ali-ebrahimi-55a8a515b/',
    icon: 'bx bxl-linkedin',
  },
  {
    id: 2,
    href: 'https://github.com/CyrusM3',
    icon: 'bx bxl-github',
  },
  {
    id: 3,
    href: 'https://twitter.com/AlexHam09937549',
    icon: 'bx bxl-twitter',
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: 'bx bx-user',
    info: 'Ali Ebrahimi',
  },
  {
    id: 2,
    icon: 'bx bx-phone',
    info: '(250) 661 - 9081',
  },
  {
    id: 3,
    icon: 'bx bx-envelope ',
    info: 'info@aliebrahimi.dev',
  },
];

export const projects = [
  {
    id: 1,
    image: work1,
    site: 'https://react-comfy-onlinestore.netlify.app/',
    icon: 'bx bx-link-alt',
    code: 'https://github.com/CyrusM3/react-e-commerce-comfy-Smoth-store',
    github: 'bx bxl-github',
    title: 'Gadgets E-commerce',
  },
  {
    id: 2,
    image: work2,
    site: 'https://job-management-tracker.netlify.app/',
    icon: 'bx bx-link-alt',
    code: 'https://github.com/CyrusM3/jobster',
    github: 'bx bxl-github',
    title: 'Job Tracker App ',
  },
  {
    id: 3,
    image: work3,
    site: 'https://guessup.netlify.app/',
    icon: 'bx bx-link-alt',
    code: 'https://github.com/CyrusM3/gussingNumber1.4',
    github: 'bx bxl-github',
    title: 'Guess Game',
  },
  {
    id: 4,
    image: work4,
    site: 'https://react-purchase-list.netlify.app/',
    icon: 'bx bx-link-alt',
    code: 'https://github.com/CyrusM3/react-shoppingList-ver1',
    github: 'bx bxl-github',
    title: 'Shopping List',
  },
  {
    id: 5,
    image: work5,
    site: 'https://hexa-color-enerator.netlify.app/',
    icon: 'bx bx-link-alt',
    code: 'https://github.com/CyrusM3/react-color-generator',
    github: 'bx bxl-github',
    title: 'Hex Color Generator',
  },
  {
    id: 6,
    image: work6,
    site: 'https://dicefun.netlify.app/',
    icon: 'bx bx-link-alt',
    code: 'https://github.com/CyrusM3/Dice-Game1.2',
    github: 'bx bxl-github',
    title: 'Dice Game',
  },
];
