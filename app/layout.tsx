import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/main_nav";
import MainFooter from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Physical Collections",
  description: "Store your physical media!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body>
        <section className="max-w-[1600px] mx-auto border-x-4 border-gray-700">
        <MainNav>
        </MainNav>
        <main className="py-16 px-16 bg-blue dark:bg-black sm:items-start">
        {children}
        </main>
        <MainFooter>
        </MainFooter>
        </section>
      </body>
    </html>
  );
}
