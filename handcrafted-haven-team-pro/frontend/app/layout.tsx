import '../styles/globals.css';

export const metadata = {
  title: 'Handcrafted Haven',
  description: 'Discover unique handmade treasures from artisans around the world.',
};

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}