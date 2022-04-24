import { FC } from 'react';
import { _IconPath, _IconProps } from './_Icon';

type Props = Pick<_IconProps, 'width' | 'className' | 'filled'>;

export const Icon_ArrowLeft: FC<Props> = props => {
  return <_IconPath {...props}>M10 19l-7-7m0 0l7-7m-7 7h18</_IconPath>;
};
