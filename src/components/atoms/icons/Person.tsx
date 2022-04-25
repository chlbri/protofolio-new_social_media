import { FC } from 'react';
import { _Icon, _IconProps } from './_Icon';

type Props = Pick<_IconProps, 'width' | 'className' | 'filled' | 'ratio'>;

export const Icon_Person: FC<Props> = props => {
  return (
    <_Icon {...props} viewBox="0 0 48 48">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={props.filled ?? '#212121'} fillRule="nonzero">
          <path d="M35.75 28a4.25 4.25 0 014.245 4.043l.005.206V33c0 3.755-1.942 6.567-4.92 8.38C32.15 43.163 28.214 44 24 44s-8.15-.837-11.08-2.62c-2.888-1.758-4.801-4.455-4.915-8.041L8 33v-.751a4.25 4.25 0 014.044-4.244L12.25 28h23.5zm0 2.5h-23.5a1.75 1.75 0 00-1.744 1.605l-.006.144V33c0 2.744 1.36 4.808 3.72 6.245C16.63 40.712 20.068 41.5 24 41.5c3.932 0 7.37-.788 9.78-2.255 2.276-1.386 3.622-3.354 3.715-5.954L37.5 33v-.751c0-.918-.707-1.67-1.606-1.743l-.144-.006zM24 4c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10S18.477 4 24 4zm0 2.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15z"></path>
        </g>
      </g>
    </_Icon>
  );
};
