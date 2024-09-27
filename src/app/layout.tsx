import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript } from '@mantine/core';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
const theme = createTheme({
    /** Your theme override here */
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
            <ColorSchemeScript />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
      </head>
      <body
        className={`${inter.className} font-medium antialiased text-coal`}
      >
      <MantineProvider>
        {children}
      </MantineProvider>
      </body>
    </html>
  );
}
