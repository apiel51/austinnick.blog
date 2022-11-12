import { PropsWithChildren } from 'react';
import Header from './Header';
import Links from './Links';

export const Page = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="container mx-auto px-4 py-2 flex flex-col items-center">
      <Header />
      <Links />
      <main className="max-w-lg w-full pt-4 flex-1">{children}</main>
    </div>
  );
};
