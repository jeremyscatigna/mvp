import type { Metadata } from 'next';
import './globals.css';
import { constants } from '@/lib/constants';
import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
    title: 'mvps.studio',
    description: 'By Founders, for Founders. We build your MVPs.',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
    metadataBase: new URL(constants.url),
};

const calFont = localFont({
    src: '../assets/fonts/CalSans.ttf',
    variable: '--font-cal',
    preload: true,
    display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`h-full ${calFont.variable} font-cal antialiased`}>
                <main>{children}</main>
                <Toaster />
            </body>
        </html>
    );
}
