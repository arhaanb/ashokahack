import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Spare Admin - Food Rescue Marketplace",
  description: "Admin dashboard for Spare - helping restaurants reduce food waste",
  keywords: ["food rescue", "sustainability", "restaurant management"],
  authors: [{ name: "Spare" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
