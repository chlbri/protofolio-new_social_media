import { FC } from 'react';
import { _IconPath } from './_Icon';

type Props = {
  sizeRem?: number;
  className?: string;
  stroke?: string;
  filled?: string;
};

export const Icon_Wifi: FC<Props> = props => {
  return (
    <_IconPath {...props} viewBox="0 0 24 24">
      M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905
      10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0
    </_IconPath>
  );
};
