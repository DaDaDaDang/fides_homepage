import '../globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Homepage',
  description: 'IR Kudos Landing',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}
