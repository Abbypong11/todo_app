import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo App",
  description: "simple todo app for learning nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       
        {children}
      </body>
    </html>
  );
}
