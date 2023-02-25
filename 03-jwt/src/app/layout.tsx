import '@/styles/globals.scss';
import '@/styles/style.scss';
import AuthProvider from './AuthProvider';

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <main className="container mx-auto">
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
