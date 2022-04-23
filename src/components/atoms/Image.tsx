import NextImage from 'next/image';
import { FC } from 'react';

type Props = {
  src?: string;
  alt: string;
  className?: string;
};

export const Image: FC<Props> = ({ src, alt, className }) => {
  return (
    <div {...{ className }}>
      <div className="relative h-full w-full">
        {!src ? (
          <div className="absolute inset-0 bg-gray-500" />
        ) : (
          <NextImage src={src} alt={alt} layout="fill" objectFit="cover" />
        )}
      </div>
    </div>
  );
};
