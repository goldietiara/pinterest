import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinterest clone",
  description: "Pinterest clone by goldie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        <Provider>
          <div className=" relative  bg-white w-full h-full">
            <div className=" sticky top-0 bg-white ">
              <NavBar />
            </div>
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
