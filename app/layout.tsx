import type {Metadata} from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Grid Layout Design',
  description: 'A dark-themed landing page section with prominent grid lines and bento-box layout.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${mono.variable} dark`}>
      <body className="bg-black text-zinc-300 font-sans antialiased selection:bg-zinc-800 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
