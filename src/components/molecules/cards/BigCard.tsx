import { FC } from 'react';
import {
  Icon_BookMark,
  Icon_Heart,
  Icon_Message,
  Icon_SendMessage,
  Image,
} from '../../atoms';

type Props = {
  profileImage?: string;
  lastPhoto?: string;
  name?: string;
  pseudo?: string;
};

export const BigCard: FC<Props> = ({
  profileImage,
  lastPhoto,
  name = 'Jane Doe',
  pseudo = '@JaneJ01',
}) => {
  return (
    <div className="last:pb-[100%]">
      <div className="rounded-[2rem] bg-slate-200 flex flex-col py-2 px-2 space-y-3 ">
        <header className="flex space-x-3 pl-2">
          <Image
            alt=""
            className="w-10 h-10 rounded-full overflow-clip"
            src={profileImage}
          />
          <div className="flex flex-col">
            <span className="font-bold">{name}</span>
            <span className="text-sm text-gray-500">{pseudo}</span>
          </div>
        </header>
        <main className="relative">
          <Image
            alt=""
            className="w-full aspect-[3/2] rounded-[2rem] overflow-clip"
            src={lastPhoto}
          />
          <div className="absolute inset-x-6 bottom-2 text-white flex justify-between text-sm z-20">
            <div className="flex space-x-3">
              <div className="flex space-x-0.5 items-center">
                <Icon_Message className="fill-white" width={1.5} />
                <span>10</span>
              </div>
              <div className="flex space-x-0.5 items-center">
                <Icon_Heart className="fill-white" width={1.5} />
                <span>122</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <Icon_SendMessage />
              <Icon_BookMark />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
