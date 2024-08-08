import type { Metadata } from "next";
import { Karla, Platypi, Mooli } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common-ui/Navbar";
import { Providers } from "@/lib/provider";

const platypi = Platypi({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Testimonials Collector",
  description: "Easiest Way to collect testimonials from your clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={platypi.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
