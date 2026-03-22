import type { CompanyInfo } from "@/lib/types";

type Props = {
  company: CompanyInfo;
};

export default function About({ company }: Props) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            私たちについて
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* 3つの強み */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {(company.strengths ?? []).map((strength, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
              style={{ backgroundColor: "var(--color-muted-bg)" }}
            >
              <div className="text-5xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-primary)" }}>
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>

        {/* 会社概要テーブル */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--color-primary)" }}>
            会社概要
          </h3>
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
                  <th className="py-4 pr-8 text-left text-sm font-semibold w-32 whitespace-nowrap" style={{ color: "var(--color-primary)" }}>
                    {row.label}
                  </th>
                  <td className="py-4 text-gray-700">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
