/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { Icon_ArrowLeft, Icon_Mail, Image } from '../components/atoms';
import { Page } from '../components/layouts/Page';
import { useSend } from '../Provider';

function useStart() {
  const send = useSend();
  useEffect(() => {
    send('START');
  }, [send]);
}

function useHook() {
  const { push } = useRouter();
  const handleBackClick = () => {
    push('/');
  };
  useStart();
  return handleBackClick;
}

const Person: FC = () => {
  const handleBackClick = useHook();
  return (
    <Page className="bg-pastel overflow-y-hidden relative flex flex-col space-y-24 pb-2">
      <header className="top-4 sticky px-4 flex justify-between z-50">
        <button
          className="w-12 flex items-center justify-center aspect-square bg-white rounded-full shadow-lg"
          onClick={handleBackClick}
        >
          <Icon_ArrowLeft />
        </button>
        <button className="w-12 flex items-center justify-center  bg-white rounded-full shadow-lg">
          <Icon_Mail filled="currentColor" width={1.8} />
        </button>
      </header>
      <main className="flex-grow bg-gradient-to-b from-blue-100/90 to-white/70 rounded-[2rem] flex flex-col items-center space-y-4 backdrop-blur-md ">
        <div className="w-3/4 space-y-3">
          <header className="flex justify-between pt-3">
            <div className="flex flex-col items-center text-sm">
              <span className="font-semibold">1K</span>
              <span className="text-xs">Followers</span>
            </div>
            <Image
              alt="avatar"
              className="rounded-full overflow-hidden -mt-14 border-4 border-white w-24 aspect-square"
            />
            <div className="flex flex-col items-center text-sm">
              <span className="font-semibold">342</span>
              <span className="text-xs">Following</span>
            </div>
          </header>
          <section className="flex flex-col items-center space-y-2 ">
            <span>@chlbri</span>
            <p className="text-center text-sm w-full text-slate-500">
              My name is Charles-Lévi BRI, I like code and making good
              stuffs.
            </p>
            <div className="w-11/12 flex space-x-5 text-sm">
              <button className="shadow-lg flex-1 bg-blue-500 text-white rounded-full shadow-blue-300 ">
                Follow
              </button>
              <button className="shadow-lg flex-1 py-2 rounded-full bg-white ">
                Message
              </button>
            </div>
          </section>
        </div>
        <section className="flex flex-col w-full items-center space-y-2 overflow-hidden">
          <header className="w-1/2 flex justify-between text-xs">
            <span className="border-b-4 px-1 border-gray-800">All</span>
            <span>Photos</span>
            <span>Videos</span>
          </header>
          {/* Image-grid */}
          <main className="bg-white shadow-md w-full p-2 rounded-[2rem]">
            <div className="rounded-[2rem] flex flex-col overflow-hidden w-full aspect-square space-y-2">
              <div className="h-[58%] flex space-x-2">
                <Image className="aspect-square h-full" alt="" />
                <div className="flex-1 flex flex-col space-y-2">
                  <Image className="flex-1" alt="" />
                  <Image className="flex-1" alt="" />
                </div>
              </div>
              <div className="flex-1 flex space-x-2">
                <Image className="flex-1" alt="" />
                <Image className="flex-1" alt="" />
                <Image className="flex-1" alt="" />
              </div>
            </div>
          </main>
        </section>
      </main>
    </Page>
  );
};

export default Person;
