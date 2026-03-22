import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "var(--color-primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center font-bold text-sm" style={{ color: "var(--color-primary)" }}>
                株
              </div>
              <span className="font-bold text-lg">株式会社〇〇</span>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed">
              テクノロジーで、ビジネスの未来を切り拓く
            </p>
          </div>

          {/* リンク */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-blue-200">
              メニュー
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/#about", label: "私たちについて" },
                { href: "/#services", label: "サービス" },
                { href: "/news", label: "お知らせ" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-blue-200 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* 連絡先 */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-blue-200">
              お問い合わせ
            </h3>
            <div className="flex flex-col gap-2 text-sm text-blue-200">
              <p>〒000-0000 東京都〇〇区〇〇1-2-3</p>
              <p>TEL: 03-0000-0000</p>
              <p>
                <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                  info@example.com
                </a>
              </p>
              <p className="text-xs mt-1">営業時間：平日 9:00〜18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} 株式会社〇〇. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-blue-300">
            <Link href="/privacy" className="hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
