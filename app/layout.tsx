import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Accredian – Next-Gen Expertise For Your Enterprise",
  description: "Cultivate high-performance teams through expert-led immersive learning experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
