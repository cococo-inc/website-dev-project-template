import Link from "next/link";
import type { Service } from "@/lib/types";

type Props = {
  services: Service[];
};

export default function Services({ services }: Props) {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ backgroundColor: "var(--color-muted-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            サービス
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お客様のビジネスステージに合わせた最適なサービスを提供します。
          </p>
        </div>

        {/* サービスカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)" }}>
                {service.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{service.detail}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg font-bold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            サービスの詳細を相談する
          </Link>
        </div>
      </div>
    </section>
  );
}
