import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hostgenics",
  description: "Perfect hosting place for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="shadow sticky top-0 bg-white">
          <nav className="container py-6 flex items-center justify-between px-6 sm:px-0">
            <h1 className="text-3xl font-black">LOGO</h1>
            <ul className="hidden sm:flex items-center space-x-5 text-sm font-semibold text-slate-800 dark:text-slate-400">
              <li className="hover:text-black">Home</li>
              <li className="hover:text-black">
                <Link href="#hosting-plans">Hosting</Link>
              </li>
              <li className="hover:text-black">Reseller</li>
              <li className="hover:text-black">
                <Link href={`#search`}>Domain</Link>
              </li>
              <li className="hover:text-black">Contact Us</li>
            </ul>
            <button className="hidden sm:block uppercase text-sm px-4 py-2 font-semibold rounded-lg border-2 border-blue-500 text-blue-500 hover:text-white dark:text-slate-400 hover:bg-blue-500 ">
              login
            </button>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
