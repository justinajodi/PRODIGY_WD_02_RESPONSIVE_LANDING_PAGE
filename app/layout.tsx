import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";
import { Theme } from "@radix-ui/themes";
import ActiveSectionContextProvider from "@/components/active";

import { Boxes } from "@/components/ui/background-boxes";
import { NavigationMenuDemo } from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <div className="fixed top-0 left-0 right-0 z-[99999999999] ">
              <NavigationMenuDemo />
            </div>
            {children}
          </ThemeProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
