/* eslint-disable react/jsx-key */
import { FC, useEffect } from 'react';
import {
  Icon_Battery,
  Icon_NetworkBars,
  Icon_Notifications,
  Icon_Photo,
  Icon_Wifi,
} from '../components/atoms';
import { Page } from '../components/layouts';
import { BigCard, SmallAvatar } from '../components/molecules';
import { useSend } from '../Provider';

function useStart() {
  const send = useSend();
  useEffect(() => {
    send('START');
  }, [send]);
}

function useHook() {
  useStart();
}

const Index: FC = () => {
  useHook();
  return (
    <Page className="space-y-5 pb-3 bg-white relative flex flex-col py-2">
      <div className="flex px-7 text-sm justify-between ">
        <span className="font-medium">9:41</span>
        <div className="flex space-x-1 items-center">
          <Icon_NetworkBars filled="" width={1} />
          <Icon_Wifi />
          <Icon_Battery width={1.4} />
        </div>
      </div>
      <header className="w-11/12 mx-auto flex justify-between items-center">
        <button className="w-12 flex items-center justify-center aspect-square bg-slate-300 rounded-full shadow-lg">
          <Icon_Photo width={1.8} filled="" />
        </button>
        <span className="text-lg font-bold">Explore</span>
        <button className="w-12 aspect-square flex items-center justify-center  bg-slate-300 rounded-full shadow-lg">
          <Icon_Notifications width={1.8} filled="" />
        </button>
      </header>

      <main className="w-11/12 mx-auto space-y-4 h-full">
        <div className="space-x-4 overflow-auto whitespace-nowrap scrollbar-hide">
          <SmallAvatar me />
          {Array.from({ length: 10 }).map((_, i) => (
            <SmallAvatar key={i} />
          ))}
        </div>
        <div className="w-full overflow-y-scroll scrollbar-hide rounded-[2rem] h-full">
          <div className="space-y-4 pt-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <BigCard key={i} />
            ))}
          </div>
        </div>
      </main>
      <footer className="absolute bottom-0 h-24 left-0 right-0 bg-indigo-300/60 backdrop-blur-xl flex z-30"></footer>
    </Page>
  );
};

export default Index;
