import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Acme Dashboard',
		default: 'Acme Dashboard',
	},
	description: 'Yay Next',
	metadataBase: new URL('https://no'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
