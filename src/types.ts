export interface IconProps {
  color?: string;
}

export interface ProjectProps {
  title: string;
  imagePath: string;
  imageAltText: string;
  description: string;
  tech: React.FC<IconProps>[];
  livePreviewLink: string;
  gitHubLink: string;
}
