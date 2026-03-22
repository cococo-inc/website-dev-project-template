import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 60%, #3b6ea5 100%)`,
      }}
    >
      {/* 背景デコレーション */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
        {/* グリッドパターン */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.5) 50px, rgba(255,255,255,0.5) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.5) 50px, rgba(255,255,255,0.5) 51px)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <p className="text-sm font-semibold tracking-widest uppercase text-blue-200 mb-6">
          Technology Partner
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          テクノロジーで、
          <br />
          ビジネスの未来を
          <br />
          <span style={{ color: "var(--color-accent)" }}>切り拓く</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          私たちは最先端のテクノロジーを活用して、
          お客様のビジネス課題を解決します。
          Webシステム開発からクラウド移行まで、
          ビジネスの成長を全力でサポートします。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:opacity-90 hover:shadow-lg shadow-md"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            無料相談はこちら
          </Link>
          <Link
            href="/#services"
            className="px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/40 hover:bg-white/10 transition-all"
          >
            サービスを見る
          </Link>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-200">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
