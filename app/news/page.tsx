import type { Metadata } from "next";
import Link from "next/link";
import { getNewsList, formatDate } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "お知らせ",
  description: "株式会社〇〇からのお知らせ・プレスリリース・採用情報です。",
};

export default async function NewsPage() {
  const { contents: newsList, totalCount } = await getNewsList(20);

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ページヘッダー */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
            News
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--color-primary)" }}>
            お知らせ
          </h1>
          <p className="mt-3 text-gray-500 text-sm">全 {totalCount} 件</p>
        </div>

        {/* ニュースリスト */}
        <div className="divide-y divide-gray-100">
          {newsList.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className="flex flex-col sm:flex-row sm:items-start gap-3 py-6 hover:bg-gray-50 transition-colors px-3 -mx-3 rounded-lg group"
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <time className="text-sm text-gray-500 w-28 flex-shrink-0">
                  {formatDate(news.publishedAt)}
                </time>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(30, 58, 95, 0.08)",
                    color: "var(--color-primary)",
                  }}
                >
                  {news.category}
                </span>
              </div>
              <div>
                <h2 className="font-medium text-gray-800 group-hover:text-[var(--color-primary)] transition-colors mb-1">
                  {news.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-1">{news.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
