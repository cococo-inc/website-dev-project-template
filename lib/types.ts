// microCMS 共通フィールド
export type MicroCMSBase = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// ニュース記事
export type News = MicroCMSBase & {
  title: string;
  content: string;
  excerpt: string;
  category: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
};

// サービス
export type Service = MicroCMSBase & {
  name: string;
  description: string;
  detail: string;
  icon: string;
  order: number;
};

// 会社情報（シングルトン）
export type CompanyInfo = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  founded: string;
  employees: string;
  strengths: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
};

// microCMS リスト API レスポンス
export type MicroCMSListResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};
