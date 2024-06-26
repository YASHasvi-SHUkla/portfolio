import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Yashasvi Shukla",
    description: "Generated by create next app",
    icons: {
        icon: [
            {
                url: '/faviconalt.png',
                href: '/faviconalt.png',
            },
        ],
    },

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}