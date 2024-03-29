import '../../styles/globals.css';
import Providers from '../provider';
import Header from '@/components/static/header';
import Sidebar from '@/components/static/sidebar';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <div className="font-sans bg-[#585858] overflow-hidden h-screen w-screen">
            <div className="h-[12%]">
              <Header />
            </div>
            <div className="h-[88%] w-full">
              <Sidebar>{children}</Sidebar>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
