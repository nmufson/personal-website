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
      'A comprehensive blogging platform featuring a backend integrated with two frontends for authors and regular users. Built with technologies including React.js, Node.js, Express.js, and PostgreSQL, the platform allows users to browse posts, sign up for new accounts, and leave comments. Authors can manage their posts using the TinyMCE editor for custom layouts, enabling them to create, edit, and delete content easily. User authentication hanndled via JWT and maintains a structured database schema through Prisma ORM.',
    tech: [JavaScriptIcon, ReactIcon, NodeIcon],
  },
  {
    title: 'Members Only Messaging App',
    imagePath: './assets/members-only-screenshot.png',
    imageAltText: 'messaging app project screenshot',
    description:
      'A messaging app allowing users to create accounts, send messages, and view posts. Membership is required to see usernames and timestamps, accessible via a special passcode. Built with Node.js, Express.js, and PostgreSQL, it features secure user authentication with Passport.js and bcrypt.js. Includes role-based privileges that allows admins to manage content. ',
    tech: [JavaScriptIcon, NodeIcon],
  },
  {
    title: 'E-Commerce Shopping Cart App',
    imagePath: './assets/shop-fast-screenshot.png',
    imageAltText: 'eCommerce app project screenshot',
    description:
      'A front-end platform showcasing React development skills and best practices. The app features a responsive home page, a shop page with product cards displaying images, titles, prices, and ratings. Users can view detailed product information, manage their cart with quantity adjustments, and proceed to review and checkout their order. Utilizes local storage for cart persistence.',
    tech: [TypeScriptIcon, ReactIcon],
  },
];

export default projects;
