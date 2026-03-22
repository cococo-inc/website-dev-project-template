import type { Metadata } from "next";
import Link from "next/link";
import { getServicesList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "サービス",
  description: "株式会社〇〇が提供するWebシステム開発・クラウドコンサルティング・UI/UXデザインのサービスをご紹介します。",
};

export default async function ServicesPage() {
  const { contents: services } = await getServicesList();

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ページヘッダー */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            サービス
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様のビジネスステージに合わせた最適なサービスを提供します。
          </p>
        </div>

        {/* サービス詳細 */}
        <div className="flex flex-col gap-12 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* アイコン */}
              <div
                className="w-full md:w-2/5 rounded-2xl flex items-center justify-center py-16"
                style={{ backgroundColor: "rgba(30, 58, 95, 0.06)" }}
              >
                <span className="text-8xl">{service.icon}</span>
              </div>

              {/* テキスト */}
              <div className="w-full md:w-3/5">
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: "var(--color-accent)" }}
                >
                  Service {String(index + 1).padStart(2, "0")}
                </span>
                <h2
                  className="text-2xl sm:text-3xl font-bold mt-2 mb-4"
                  style={{ color: "var(--color-primary)" }}
                >
                  {service.name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-gray-500 leading-relaxed">{service.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 sm:p-12 text-center"
          style={{ backgroundColor: "rgba(30, 58, 95, 0.05)" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
            まずはご相談ください
          </h2>
          <p className="text-gray-600 mb-8">
            お客様の課題やご要望をお聞かせください。最適なプランをご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            無料相談を申し込む
          </Link>
        </div>
      </div>
    </div>
  );
}
