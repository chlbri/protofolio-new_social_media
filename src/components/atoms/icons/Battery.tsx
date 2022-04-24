import { FC } from 'react';
import { _Icon, _IconProps } from './_Icon';

type Props = Pick<_IconProps, 'width' | 'className' | 'filled' | 'ratio'>;

export const Icon_Battery: FC<Props> = props => {
  return (
    <_Icon {...props} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="#212121" fillRule="nonzero">
          <path d="M17 6a3 3 0 013 3v1h1a1 1 0 011 1v2a1 1 0 01-1 1h-1v1a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h12zm-.002 1.5H5a1.5 1.5 0 00-1.493 1.356L3.5 9v6a1.5 1.5 0 001.355 1.493L5 16.5h11.998a1.5 1.5 0 001.493-1.356l.007-.144V9a1.5 1.5 0 00-1.355-1.493l-.145-.007zM6 9h7a1 1 0 01.993.883L14 10v4a1 1 0 01-.883.993L13 15H6a1 1 0 01-.994-.883L5 14v-4a1 1 0 01.883-.993L6 9h7-7z"></path>
        </g>
      </g>
    </_Icon>
  );
};
