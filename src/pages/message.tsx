/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import {
  Atom_Message,
  Icon_ArrowLeft,
  Icon_Battery,
  Icon_NetworkBars,
  Icon_Photo,
  Icon_SendMessage,
  Icon_Wifi,
  Image,
} from '../components/atoms';
import { Page } from '../components/layouts/Page';
import { useSend } from '../Provider';

function useStart() {
  const send = useSend();
  useEffect(() => {
    send('START');
  }, [send]);
}

function useHook() {
  const { back } = useRouter();
  const handleBackClick = () => {
    back();
  };
  useStart();
  return handleBackClick;
}

const Message: FC = () => {
  const handleBackClick = useHook();
  return (
    <Page className="bg-pastel overflow-y-hidden relative flex flex-col">
      <div className="top-2 sticky px-4 space-y-3">
        <div className="flex px-7 text-sm justify-between w-full">
          <span className="font-medium">9:41</span>
          <div className="flex space-x-1 items-center">
            <Icon_NetworkBars filled="" width={1} />
            <Icon_Wifi />
            <Icon_Battery width={1.4} />
          </div>
        </div>
        <header className="flex justify-between z-50">
          <button
            className="w-12 flex items-center justify-center aspect-square bg-white rounded-full shadow-lg"
            onClick={handleBackClick}
          >
            <Icon_ArrowLeft />
          </button>
        </header>
      </div>
      <main className="mt-6 flex-grow bg-gradient-to-b from-blue-100/70 to-white/70 rounded-[2rem] flex flex-col items-center space-y-4 backdrop-blur-md p-2">
        <div className="rounded-[2rem] bg-gradient-to-b from-gray-50/70 to-blue-100/70 flex flex-col backdrop-blur-[1px] w-full h-full px-6 py-2 justify-between">
          <div className="felx flex-col space-y-2">
            <div className="flex justify-between items-center">
              <header className="flex space-x-3">
                <Image
                  alt="dss"
                  className="w-10 h-10 rounded-full overflow-hidden relative"
                />
                <div className="flex flex-col">
                  <span className="font-bold">fjdbvikjvfd</span>
                  <span className="text-sm text-gray-500">fdv fd</span>
                </div>
              </header>
              <button className="bg-blue-500 rounded-full aspect-square w-10 h-10 justify-center items-center flex pb-1 text-lg text-white font-black">
                x
              </button>
            </div>
            <div className="w-full rounded-full h-0.5 bg-gray-300"></div>
          </div>
          <div className="flex flex-col space-y-7">
            <div className="space-y-3 flex flex-col">
              <Atom_Message>Hi, Charles-Lévi ! How are you ?</Atom_Message>
              <Atom_Message sender>I&apos;m good and you ! </Atom_Message>
              <Atom_Message>
                I&apos;m doing good. What are you doing ?
              </Atom_Message>
              <Atom_Message sender>I work on my app design</Atom_Message>
              <Atom_Message>
                Let&apos;s get blunch! How about alloco ?
              </Atom_Message>
              <Atom_Message sender>That sounds great</Atom_Message>
            </div>
            <div className="flex justify-between space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <Icon_Photo filled="" className="fill-white" />
              </div>
              <div className="bg-white rounded-full flex space-x-2 pl-5 flex-grow justify-center">
                <input
                  type="text"
                  className="hover:outline-none focus:outline-none bg-transparent flex-grow"
                />
                <div className="bg-blue-500 p-3 rounded-full max-w">
                  <Icon_SendMessage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default Message;
