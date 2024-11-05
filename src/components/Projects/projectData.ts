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
    title: 'Members Only Messaging App',
    imagePath: './assets/members-only-screenshot.png',
    imageAltText: 'messaging app project screenshot',
    description:
      'A messaging app allowing users to create accounts, send messages, and view posts. Membership is required to see usernames and timestamps, accessible via a special passcode. Built with Node.js, Express.js, and PostgreSQL, it features secure user authentication with Passport.js and bcrypt.js. Includes role-based privileges that allows admins to manage content. ',
    tech: [JavaScriptIcon, NodeIcon],
    gitHubLink: 'https://github.com/nmufson/members-only',
    livePreviewLink: 'https://members-only-production-c726.up.railway.app/',
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
];

export default projects;
