import React from 'react';
import styles from './IconWrapper.module.css';
import { IconProps } from '../../types';

interface IconWrapperProps {
  children: React.ReactElement<IconProps>;
  techName: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, techName }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <p>{techName}</p>
    </div>
  );
};

export default IconWrapper;
