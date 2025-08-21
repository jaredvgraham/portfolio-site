// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics"; // Import the Analytics component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jared Graham - Frontend / Full-Stack Developer",
  description:
    "Jared Graham is a frontend / full-stack developer based in Boston, MA.",
};
//
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-RDBNB3Q3XS`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RDBNB3Q3XS', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <Analytics /> {/* Include the Analytics component here */}
        <div className="w-full h-screen overflow-y-scroll overflow-x-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
