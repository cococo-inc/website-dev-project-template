import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "株式会社〇〇へのお問い合わせはこちらから。無料でご相談いただけます。",
};

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ページヘッダー */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            お問い合わせ
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            プロジェクトのご相談、サービスに関するご質問など、
            お気軽にお問い合わせください。
            通常2営業日以内にご返答いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* 連絡先情報 */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-6">
              {[
                { icon: "📞", label: "電話番号", value: "03-0000-0000", note: "平日 9:00〜18:00" },
                { icon: "✉️", label: "メール", value: "info@example.com", note: "24時間受付中" },
                { icon: "📍", label: "所在地", value: "東京都〇〇区〇〇\n1-2-3", note: "" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-0.5">{item.label}</p>
                    <p className="font-medium text-gray-800 whitespace-pre-line">{item.value}</p>
                    {item.note && <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* フォーム */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
