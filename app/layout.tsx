import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Streaks",
  description: "Tariq's habit streaks based on Atomic Habit principles",
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
