import type { Metadata } from "next";
import { getCompanyInfo } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "私たちについて",
  description: "株式会社〇〇の会社概要・経営理念・強みについてご紹介します。",
};

export default async function AboutPage() {
  const company = await getCompanyInfo();

  return (
    <div className="section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ページヘッダー */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            私たちについて
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* ミッション */}
        <div
          className="rounded-2xl p-8 sm:p-12 mb-16 text-center"
          style={{ backgroundColor: "rgba(30, 58, 95, 0.05)" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
            ミッション
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            "{company.tagline}"
          </p>
        </div>

        {/* 強み */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--color-primary)" }}>
            私たちの強み
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(company.strengths ?? []).map((strength, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="text-5xl mb-4">{strength.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-primary)" }}>
                  {strength.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 会社概要 */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--color-primary)" }}>
            会社概要
          </h2>
          <table className="w-full border-collapse">
            <tbody>
              {[
                { label: "会社名", value: company.name },
                { label: "設立", value: company.founded },
                { label: "従業員数", value: company.employees },
                { label: "所在地", value: company.address },
                { label: "電話番号", value: company.phone },
                { label: "メールアドレス", value: company.email },
              ].map((row) => (
                <tr key={row.label} className="border-b border-gray-100">
                  <th
                    className="py-4 pr-8 text-left text-sm font-semibold w-36 whitespace-nowrap"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {row.label}
                  </th>
                  <td className="py-4 text-gray-700">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
