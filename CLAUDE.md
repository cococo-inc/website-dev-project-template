# Corporate Site Template

Next.js 16 + microCMS + Tailwind CSS v4 によるコーポレートサイトテンプレート。

## 開発

```bash
npm run dev   # localhost:3000 で起動
```

## microCMS 連携

1. `.env.local.example` を `.env.local` にコピー
2. microCMS の `MICROCMS_SERVICE_DOMAIN` と `MICROCMS_API_KEY` を設定
3. 未設定の場合は `lib/mockData.ts` のモックデータが使用されます

## カスタマイズ

- **ブランドカラー**: `app/globals.css` の `@theme` ブロック内の CSS 変数を変更
- **会社情報**: microCMS 未設定時は `lib/mockData.ts` の `mockCompanyInfo` を編集
- **ロゴ・会社名**: `components/layout/Header.tsx` と `components/layout/Footer.tsx`
