import { FC, ReactNode } from 'react';
import { Phone } from './Phone';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Page: FC<Props> = ({ children, className }) => {
  return (
    <div className="bg-indigo-100 min-h-screen flex items-center justify-center flex-col space-y-5 p-3">
      <Phone className={className}>{children}</Phone>
      <div className="italic flex flex-col space-y-2 items-center text-lg">
        <span>
          <span>Template From :</span>
          <a
            className="font-bold border-b-2 border-indigo-500"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHpNLXVja1dQWUN3VUE4azh1T3oxUnRRZWM3d3xBQ3Jtc0traGN0QUVtNUZzZVdHVEhZeTl4RU1DaW4tLWxfN3dBTkx6d3ZkTnczWmQ4Zi0tNzhVQnVLVmdETnFQZnpqTERib0VvYkJHS3JLNUNaeEFwVURYWVlqU0NqOW82SnZjd0NIS2xhSkxNOTV1QmV4dHhJMA&q=https%3A%2F%2Fwww.figma.com%2Fcommunity%2Ffile%2F1096790122416342536%2FSocial-Media-App&v=qiW2qKVGT6k"
          >
            {' design-code'}
          </a>
        </span>
        <span>
          <span>Background :</span>
          <a
            className="font-bold border-b-2 border-indigo-500"
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            {' Pawel Czerwinski'}
          </a>
          <span>{' on '}</span>
          <a
            className="font-bold border-b-2 border-orange-500 text-orange-600"
            target="_blank"
            rel="noreferrer"
            href="https://unsplash.com/s/photos/pastel-blue-rose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};
