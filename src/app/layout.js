import Navbar from "@/components/Shared/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fundamental of next js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="luxury">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
