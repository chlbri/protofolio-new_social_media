import { useRouter } from 'next/router';
import { FC } from 'react';
import { Image } from '../atoms/Image';

type Props = {
  src?: string;
  me?: true;
  name?: string;
};

function useHook() {
  const { push } = useRouter();
  const handlePersonClick = () => {
    push('/person');
  };
  return handlePersonClick;
}

export const SmallAvatar: FC<Props> = ({ src, me, name = 'Aida' }) => {
  const handlePersonClick = useHook();
  return (
    <div className="inline-block gap-3 w-16">
      <button
        className="relative border-2 border-blue-500 rounded-full p-0.5 overflow-hidden w-full"
        onClick={handlePersonClick}
      >
        <Image
          alt=""
          className="w-full aspect-square rounded-full overflow-hidden"
          src={src}
        />
        {me && (
          <div className="absolute inset-2 bg-gray-500/20 backdrop-blur-[1px] flex items-center justify-center rounded-full">
            <span className="text-3xl text-white font-bold mb-1">+</span>
          </div>
        )}
      </button>
      <div className="flex justify-center px-2">
        <span className="truncate text-xs font-semibold">{name}</span>
      </div>
    </div>
  );
};
