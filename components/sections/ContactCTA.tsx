import Link from "next/link";

export default function ContactCTA() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)`,
      }}
    >
      {/* 背景デコレーション */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          まずはお気軽にご相談ください
        </h2>
        <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          プロジェクトの規模や予算に関わらず、お客様のビジネス課題について
          お話しを聞かせてください。最適なソリューションをご提案します。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            無料相談を申し込む
          </Link>
          <a
            href="tel:03-0000-0000"
            className="px-8 py-4 rounded-lg font-bold text-white text-lg border-2 border-white/40 hover:bg-white/10 transition-all"
          >
            03-0000-0000
          </a>
        </div>
        <p className="mt-6 text-sm text-blue-200">
          営業時間：平日 9:00〜18:00 / 無料・秘密厳守
        </p>
      </div>
    </section>
  );
}
