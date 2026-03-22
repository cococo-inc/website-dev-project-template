import type { Metadata } from "next";
import Link from "next/link";
import { getNewsDetail, getNewsList, formatDate } from "@/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { contents } = await getNewsList(100);
  return contents.map((news) => ({ slug: news.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const news = await getNewsDetail(slug);
    return {
      title: news.title,
      description: news.excerpt,
    };
  } catch {
    return { title: "記事が見つかりません" };
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  let news;
  try {
    news = await getNewsDetail(slug);
  } catch {
    notFound();
  }

  return (
    <div className="section-padding">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* パンくずリスト */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
            ホーム
          </Link>
          <span>/</span>
          <Link href="/news" className="hover:text-[var(--color-primary)] transition-colors">
            お知らせ
          </Link>
          <span>/</span>
          <span className="text-gray-800 line-clamp-1">{news.title}</span>
        </nav>

        {/* 記事ヘッダー */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <time className="text-sm text-gray-500">{formatDate(news.publishedAt)}</time>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(30, 58, 95, 0.08)",
                color: "var(--color-primary)",
              }}
            >
              {news.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ color: "var(--color-primary)" }}>
            {news.title}
          </h1>
        </header>

        {/* 記事本文 */}
        <div
          className="prose prose-lg max-w-none mb-12 [&_h2]:text-[var(--color-primary)] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-[var(--color-primary)] [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        {/* 戻るボタン */}
        <div className="border-t border-gray-100 pt-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: "var(--color-primary)" }}
          >
            ← お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
