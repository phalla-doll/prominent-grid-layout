import type {Metadata} from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Mantha Studio',
  description: 'Get enterprise-grade web applications delivered in record time. Mantha Studio combines strategic design with robust engineering.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${mono.variable} dark`}>
      <body className="bg-black text-zinc-300 font-sans antialiased selection:bg-zinc-800 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
