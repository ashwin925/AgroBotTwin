import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgroAI Assistant",
  description: "Production-ready agricultural advisory assistant with multilingual UI and market insights."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
