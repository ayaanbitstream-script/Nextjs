import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalProvider from "./components/ModalProvider";

export const metadata: Metadata = {
  title: "Accredian – Next-Gen Expertise For Your Enterprise",
  description: "Cultivate high-performance teams through expert-led immersive learning experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#09090b] text-white">
        <ModalProvider>
          <Header /> 
          <main>{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}