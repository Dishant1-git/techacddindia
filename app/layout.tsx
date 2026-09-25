import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "Best IT & AI Courses in Jalandhar | Industry-Level Hands-On Training | techcadd Jalandhar",
  description:
    "techcadd Computer Education — AI, Full-Stack, Data Science, Cybersecurity, Cloud & Digital Marketing training in Jalandhar. Live projects, certified trainers and placement support since 2016.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
