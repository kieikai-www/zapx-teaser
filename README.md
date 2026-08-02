# ZAPX ティザーサイト

公開URL: https://zapx-teaser.kieikai.or.jp/

[Next.js](https://nextjs.org)（App Router）で構築されたティザーサイトです。お知らせ・特別情報（YouTube動画）は [microCMS](https://microcms.io) で管理しています。

## コンテンツ更新について

「お知らせ」「特別情報」の更新など、日常の運用でこのリポジトリを直接触る必要はありません。手順は以下の運用マニュアルにまとめています。

**[→ 運用マニュアル（docs/OPERATIONS_MANUAL.md）](docs/OPERATIONS_MANUAL.md)**

## 開発環境のセットアップ

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local.example` をコピーして `.env.local` を作成し、microCMSのサービスドメインとAPIキーを設定します。

```bash
cp .env.local.example .env.local
```

```
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。`app/page.tsx` を編集すると自動的に反映されます。

## デプロイ

[Vercel](https://vercel.com) にデプロイしています。`main` ブランチへのプッシュで本番環境に反映されます。

- 独自ドメイン: `zapx-teaser.kieikai.or.jp`（Xserverで管理するDNSからVercelへCNAME接続）

## 技術スタック

- [Next.js](https://nextjs.org/docs) 16
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com)
- [microCMS](https://document.microcms.io)（コンテンツ管理）
- [Vercel](https://vercel.com/docs)（ホスティング）
