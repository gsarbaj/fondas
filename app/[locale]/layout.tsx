

import type {Metadata} from "next";
import {NextIntlClientProvider, useTranslations} from 'next-intl';
import {getMessages} from 'next-intl/server';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NavBar";

import {getTranslations} from 'next-intl/server';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});



export const metadata: Metadata = {
    title: {
        default: "Naujas Gyvenimas",
        template: "%s - Naujas Gyvenimas"
    },
    description: "Guzelė kovoja su itin reta ir mirtina autoimunine liga. Šiuo metu ji gydoma Santariškių ligoninėje, kur ja rūpinasi geriausi Lietuvos gydytojai. Tačiau jos būklė išlieka labai sunki, ir niekas negali pasakyti, ar ji išgyvens.",
};

export default async function LocaleLayout({
                                               children,
                                               params: {locale}
                                           }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
        <head>
            <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48"/>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
            <meta name="apple-mobile-web-app-title" content="Naujas Gyvenimas"/>
            <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
            <Navbar/>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
