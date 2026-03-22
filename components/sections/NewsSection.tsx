import Link from "next/link";
import type { News } from "@/lib/types";
import { formatDate } from "@/lib/microcms";

type Props = {
  newsList: News[];
};

export default function NewsSection({ newsList }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションヘッダー */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--color-accent)" }}>
              News
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "var(--color-primary)" }}>
              お知らせ
            </h2>
          </div>
          <Link
            href="/news"
            className="text-sm font-semibold hover:underline hidden sm:block"
            style={{ color: "var(--color-primary)" }}
          >
            すべて見る →
          </Link>
        </div>

        {/* ニュースリスト */}
        <div className="divide-y divide-gray-100">
          {newsList.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`}
              className="flex flex-col sm:flex-row sm:items-center gap-3 py-5 hover:bg-gray-50 transition-colors px-2 -mx-2 rounded-lg group"
            >
              <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
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
              <h3 className="text-gray-800 font-medium group-hover:text-[var(--color-primary)] transition-colors">
                {news.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* モバイル用「すべて見る」 */}
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/news"
            className="text-sm font-semibold hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            すべて見る →
          </Link>
        </div>
      </div>
    </section>
  );
}
