import { createClient } from "microcms-js-sdk";
import type { News, Service, CompanyInfo, MicroCMSListResponse } from "./types";
import { mockNews, mockServices, mockCompanyInfo } from "./mockData";

// microCMS クライアント（APIキーが設定されている場合のみ）
const isConfigured =
  process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY;

const client = isConfigured
  ? createClient({
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
      apiKey: process.env.MICROCMS_API_KEY!,
    })
  : null;

// --- ニュース ---

export async function getNewsList(limit = 10, offset = 0): Promise<MicroCMSListResponse<News>> {
  if (!client) {
    const contents = mockNews.slice(offset, offset + limit);
    return { contents, totalCount: mockNews.length, offset, limit };
  }
  try {
    return await client.getList<News>({
      endpoint: "news",
      queries: { limit, offset, orders: "-publishedAt" },
    });
  } catch {
    const contents = mockNews.slice(offset, offset + limit);
    return { contents, totalCount: mockNews.length, offset, limit };
  }
}

export async function getNewsDetail(id: string): Promise<News> {
  if (!client) {
    const news = mockNews.find((n) => n.id === id);
    if (!news) throw new Error(`News not found: ${id}`);
    return news;
  }
  try {
    return await client.getListDetail<News>({ endpoint: "news", contentId: id });
  } catch {
    const news = mockNews.find((n) => n.id === id);
    if (!news) throw new Error(`News not found: ${id}`);
    return news;
  }
}

// --- サービス ---

export async function getServicesList(): Promise<MicroCMSListResponse<Service>> {
  if (!client) {
    return { contents: mockServices, totalCount: mockServices.length, offset: 0, limit: 100 };
  }
  try {
    return await client.getList<Service>({
      endpoint: "services",
      queries: { limit: 100, orders: "order" },
    });
  } catch {
    return { contents: mockServices, totalCount: mockServices.length, offset: 0, limit: 100 };
  }
}

// --- 会社情報（シングルトン想定） ---

export async function getCompanyInfo(): Promise<CompanyInfo> {
  if (!client) {
    return mockCompanyInfo;
  }
  try {
    const data = await client.get<CompanyInfo>({ endpoint: "company" });
    return {
      ...mockCompanyInfo,
      ...data,
      strengths: Array.isArray(data.strengths) ? data.strengths : mockCompanyInfo.strengths,
    };
  } catch {
    return mockCompanyInfo;
  }
}

// 日付フォーマット
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
