"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "私たちについて" },
  { href: "/#services", label: "サービス" },
  { href: "/news", label: "お知らせ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "var(--color-primary)" }}>
              株
            </div>
            <span className="font-bold text-lg" style={{ color: "var(--color-primary)" }}>
              株式会社〇〇
            </span>
          </Link>

          {/* PCナビゲーション */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              無料相談
            </Link>
          </nav>

          {/* ハンバーガーメニュー */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current mb-1.5" />
            <div className="w-6 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-2 rounded-md text-sm font-semibold text-white text-center transition-colors hover:opacity-90"
              style={{ backgroundColor: "var(--color-accent)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              無料相談
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
