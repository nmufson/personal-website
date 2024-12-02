import { ProjectProps } from '../../types';
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodeIcon,
} from '../../../public/assets/icons';

const projects: ProjectProps[] = [
  {
    title: 'Full-Stack Blog',
    imagePath: './assets/blog-screenshot.png',
    imageAltText: 'blog project screenshot',
    description:
      'A comprehensive blogging platform featuring a backend integrated with two frontends for authors and users. Built with React, Node, Express, and PostgreSQL, it lets users browse posts, sign up, and comment. Authors manage posts with TinyMCE editor for custom layouts, with create, edit, and delete functionality. User authentication is via JWT, with database management by Prisma ORM.',
    tech: [JavaScriptIcon, ReactIcon, NodeIcon],
    gitHubLink: 'https://github.com/nmufson/blog-platform',
    livePreviewLink: 'https://blog-platform-chi-seven.vercel.app/',
  },
  {
    title: `"Lost & Found" - Where's Waldo Game`,
    imagePath: './assets/lost-and-found-screenshot.png',
    imageAltText: `"Lost & Found," Where's Waldo Game screenshot`,
    description: `"Where's Waldo" style game featuring a backend that serves game images and character coordinates, and a frontend where players can find characters, compete for record times, and add their scores to the leaderboard. Built with React, Node, Express, and PostgreSQL.`,
    tech: [TypeScriptIcon, ReactIcon, NodeIcon],
    gitHubLink: 'https://github.com/nmufson/lost-and-found',
    livePreviewLink: 'https://lost-and-found-frontend-plum.vercel.app/',
  },
  {
    title: 'E-Commerce Shopping Cart App',
    imagePath: './assets/shop-fast-screenshot.png',
    imageAltText: 'eCommerce app project screenshot',
    description:
      'A front-end platform showcasing React development skills and best practices. The app features a responsive home page, a shop page with product cards displaying images, titles, prices, and ratings. Users can view detailed product information, manage their cart with quantity adjustments, and proceed to review and checkout their order. Utilizes local storage for cart persistence.',
    tech: [TypeScriptIcon, ReactIcon],
    gitHubLink: 'https://github.com/nmufson/shopping-cart',
    livePreviewLink: 'https://shopping-cart-umber-three.vercel.app/',
  },
  {
    title: 'Memory Game',
    imagePath: './assets/memory-game-screenshot.png',
    imageAltText: 'Memory Game project screenshot',
    description: `Memory card game featuring characters from famous TV series 'The Wire' and 'Breaking Bad.' Users are challenged to select as many unique characters as possible without repeating selections.`,
    tech: [TypeScriptIcon, ReactIcon],
    gitHubLink: 'https://github.com/nmufson/memory-game',
    livePreviewLink: 'https://memory-game-sable-seven.vercel.app/',
  },
  {
    title: 'Members Only Messaging App',
    imagePath: './assets/members-only-screenshot.png',
    imageAltText: 'messaging app project screenshot',
    description:
      'A messaging app allowing users to create accounts, send messages, and view posts. Membership is required to see usernames and timestamps, accessible via a special passcode. Built with Node.js, Express.js, and PostgreSQL, it features secure user authentication with Passport.js and bcrypt.js. Includes role-based privileges that allows admins to manage content. ',
    tech: [JavaScriptIcon, NodeIcon],
    gitHubLink: 'https://github.com/nmufson/members-only',
    livePreviewLink: 'https://members-only-production-c726.up.railway.app/',
  },
];

export default projects;
