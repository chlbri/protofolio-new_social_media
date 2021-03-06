import { FC } from 'react';
import { _Icon, _IconProps } from './_Icon';

type Props = Pick<_IconProps, 'width' | 'className' | 'filled'>;

export const Icon_Heart: FC<Props> = props => {
  return (
    <_Icon {...props} viewBox="0 0 20 20" filled="currentColor">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </_Icon>
  );
};
