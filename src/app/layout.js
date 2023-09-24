import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Waste Management",
  description: "Govt of Kerela Waste Management Department",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-lime-100">
          <div className="flex flex-col justify-center">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
