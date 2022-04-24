import { FC } from 'react';
import { _Icon, _IconProps } from './_Icon';

type Props = Pick<_IconProps, 'width' | 'className' | 'filled' | 'ratio'>;

export const Icon_SendMessage: FC<Props> = props => {
  return (
    <_Icon {...props} viewBox="0 0 32 32">
      <path
        d="M26.4 2.9L3.8 15c-.7.4-.7 1.5.1 1.8l20.8 8.7c.6.3 1.3-.2 1.4-.8l1.7-20.8c.1-.9-.7-1.4-1.4-1z"
        className="st0"
      ></path>
      <path
        d="M26 4L13 20v7.3c0 .9 1.2 1.4 1.8.7l4.2-5"
        className="st0"
      ></path>
    </_Icon>
  );
};
