import { useRouter } from 'next/router';
import { FC } from 'react';
import tw from 'tailwind-styled-components';
import {
  Icon_FooterSVG,
  Icon_Home,
  Icon_Notifications,
  Icon_Person,
  Icon_Tchat,
} from '../atoms';

function useHook() {
  const { push } = useRouter();
  const handleMessagelick = () => {
    push('/message');
  };
  return { handleMessagelick };
}

const Btn = tw.button`backdrop-blur-sm rounded-full p-1 active:scale-75`;

const BTN_WIDTH = 1.7;

export const Footer: FC = () => {
  const { handleMessagelick } = useHook();
  return (
    <footer
      className="absolute bottom-0 left-0 right-0 flex rounded-b-[2rem] z-30 pt-10 overflow-y-hidden"
      style={{}}
    >
      <div className="w-full rounded-b-[2rem] relative">
        <Icon_FooterSVG className="fill-indigo-300/60 backdrop-blur-md w-full aspect-[1001 / 293]" />
        <div className="absolute top-4 inset-x-7 flex justify-between">
          <div className="flex space-x-10 items-center">
            <Btn>
              <Icon_Home filled="white" width={BTN_WIDTH} />
            </Btn>
            <Btn onClick={handleMessagelick}>
              <Icon_Tchat filled="white" width={BTN_WIDTH} />
            </Btn>
          </div>
          <button className="absolute -top-10 w-20 inset-x-auto h-20 rounded-full overflow-hidden bg-white/40 backdrop-blur-md text-blue-900 flex justify-center items-center text-6xl font-black font-mono left-1/2 -translate-x-1/2">
            +
          </button>
          <div className="flex space-x-10 items-center">
            <Btn>
              <Icon_Person filled="white" width={BTN_WIDTH} />
            </Btn>
            <Btn>
              <Icon_Notifications filled="white" width={BTN_WIDTH} />
            </Btn>
          </div>
        </div>
      </div>
    </footer>
  );
};
