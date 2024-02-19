import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

export const ColGridMain: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-second h-52 col-span-1 p-4 sm:p-8 rounded-lg flex justify-center items-start flex-col">
      {children}
    </div>
  );
};
