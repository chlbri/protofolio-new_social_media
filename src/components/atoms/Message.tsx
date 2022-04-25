import { FC } from 'react';

type Props = {
  children: string;
  sender?: true;
};

export const Atom_Message: FC<Props> = ({ children, sender }) => {
  const className = `px-4 py-2 max-w-[70%]  ${
    sender
      ? 'rounded-l-full rounded-tr-full bg-blue-500 text-white self-end'
      : 'rounded-r-full rounded-tl-full bg-white text-black'
  }`;
  return <span {...{ className, children }} />;
};
