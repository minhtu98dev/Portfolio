import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Minh Tu Portfolio",
  description: "portfolio with Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}

        <ScrollToTop />
      </body>
    </html>
  );
}
