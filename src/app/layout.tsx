import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Demo",
  description: "Demo made by Arash Forghanbin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl">{children}</body>
    </html>
  );
}
