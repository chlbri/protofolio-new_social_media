import { FC, ReactNode, SVGProps } from 'react';
import { DEFAULT_ICON_WIDTH_REM } from '../../../constants/dimensions';

export type _IconProps = {
  width?: number;
  height?: number;
  children: ReactNode;
  stroke?: string;
  filled?: string;
  className?: string;
  ratio?: number;
  viewBox?: string;
};

export const _Icon: FC<_IconProps> = ({
  width,
  children,
  stroke = 'currentColor',
  className,
  filled,
  viewBox = '0 0 24 24',
  ratio = 1,
  height,
}) => {
  const props: SVGProps<SVGSVGElement> = {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox,
    width: `${width ?? (height ?? DEFAULT_ICON_WIDTH_REM) * ratio}rem`,
    height: `${height ?? (width ?? DEFAULT_ICON_WIDTH_REM) / ratio}rem`,
    className,
  };
  if (filled !== undefined) {
    props.fill = filled === '' ? 'currentColor' : filled;
  } else {
    props.stroke = stroke;
    props.strokeWidth = 2;
  }

  return <svg {...props}>{children}</svg>;
};

type _IconPathProps = _IconProps & { children: string };

export const _IconPath: FC<_IconPathProps> = ({ children, ...props }) => {
  return (
    <_Icon {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d={children} />
    </_Icon>
  );
};
