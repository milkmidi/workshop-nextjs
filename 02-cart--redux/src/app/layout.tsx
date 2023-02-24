import '@/styles/globals.scss';
import '@/styles/style.scss';
import { PropsWithChildren } from 'react';
import ReduxProvider from './ReduxProvider.client';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
