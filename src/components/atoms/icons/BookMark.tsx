import { FC } from 'react';
import { _IconPath, _IconProps } from './_Icon';

type Props = Pick<_IconProps, 'width' | 'className' | 'filled'>;

export const Icon_BookMark: FC<Props> = props => {
  return (
    <_IconPath {...props} viewBox="0 0 490.6 490.6" filled="white">
      M393 0H97.6c-14 0-25.3 11.3-25.3 25.3v332.6c0 11.5 5.6 22.2 15
      28.8l140.8 98.5c10.3 7.2 24.1 7.2 34.4 0l140.8-98.5c9.4-6.6 15-17.3
      15-28.8V25.3C418.3 11.3 407 0 393 0zm-41.5 189.9l-48.1 40.9 15
      61.5c2.8 11.6-9.7 20.8-19.8 14.5l-53.3-33.5-53.4 33.4c-10.1
      6.3-22.6-2.9-19.8-14.5l15-61.5-48.1-40.9c-9-7.7-4.3-22.6
      7.6-23.4l62.7-4.6 23.7-58.7c4.5-11 20-11 24.5 0l23.7 58.7 62.7
      4.6c11.9.9 16.7 15.8 7.6 23.5z
    </_IconPath>
  );
};
