import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import PortfolioNavbar from '@/components/custom components/Navbar';
import Footer from '@/components/custom components/FooterSection';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <PortfolioNavbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
