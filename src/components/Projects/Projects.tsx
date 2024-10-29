import styles from './Projects.module.css';
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NodeIcon,
} from '../../../public/assets/icons';
import { IconProps } from '../../types';

const Projects: React.FC<> = () => {
  return <div className={styles.projectsContainer}></div>;
};

const projects = [
  {
    title: 'Full-Stack Blog',
    imagePath: './public/assets/blog-screenshot.png',
    imageAltText: 'blog project screenshot',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    tech: [JavaScriptIcon, ReactIcon, NodeIcon],
  },
  {
    title: 'Members Only Messaging App',
    imagePath: './public/assets/members-only-screenshot.png',
    imageAltText: 'messaging app project screenshot',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    tech: [JavaScriptIcon, NodeIcon],
  },
  {
    title: 'e-Commerce Shopping Cart App',
    imagePath: './public/assets/shop-fast-screenshot.png',
    imageAltText: 'eCommerce app project screenshot',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    tech: [TypeScriptIcon, ReactIcon],
  },
];
