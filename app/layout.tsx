import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | 株式会社〇〇",
    default: "株式会社〇〇 | テクノロジーで、ビジネスの未来を切り拓く",
  },
  description:
    "株式会社〇〇は、Webシステム開発・クラウドコンサルティング・UI/UXデザインを通じて、お客様のビジネス課題を解決するテクノロジーパートナーです。",
  keywords: ["Web開発", "クラウド", "システム開発", "IT", "DX"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
