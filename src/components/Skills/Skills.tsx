import styles from './Skills.module.css';
import IconWrapper from '../IconWrapper/IconWrapper';
import {
  CSSIcon,
  ExpressIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  NodeIcon,
  PostgreIcon,
  PrismaIcon,
  ReactIcon,
  TypeScriptIcon,
} from '../../../public/assets/icons';
import { IconProps } from '../../types';

interface TechStackItem {
  Icon: React.FC<IconProps>;
  name: string;
}

const Skills = () => {
  const techStackIcons: TechStackItem[] = [
    { Icon: TypeScriptIcon, name: 'TypeScript' },
    { Icon: JavaScriptIcon, name: 'JavaScript' },
    { Icon: ReactIcon, name: 'React' },
    { Icon: NodeIcon, name: 'Node.js' },
    { Icon: ExpressIcon, name: 'Express' },
    { Icon: HTMLIcon, name: 'HTML' },
    { Icon: CSSIcon, name: 'CSS' },
    { Icon: PostgreIcon, name: 'PostgreSQL' },
    { Icon: PrismaIcon, name: 'Prisma' },
    { Icon: GitIcon, name: 'Git' },
  ];

  return (
    <div className={styles.iconsContainer}>
      {techStackIcons.map(({ Icon, name }) => (
        <IconWrapper key={name} techName={name}>
          <Icon />
        </IconWrapper>
      ))}
    </div>
  );
};

export default Skills;
