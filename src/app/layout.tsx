import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: [],
});

export const metadata: Metadata = {
  title: "Vizzi",
  description: "Vizzi Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <title>Vizzii</title>
            <meta
                name="viewport"
                content="minimum-scale=3, initial-scale=1, width=device-width"
            />
      </head>
      <body
        className={`${inter.className} font-medium antialiased text-coal`}
      >
        {children}
      </body>
    </html>
  );
}
