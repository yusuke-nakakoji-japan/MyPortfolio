# MyPortfolio

主に趣味で開発したツールやプロジェクトを公開するポートフォリオサイトです。

## ポートフォリオサイト

**URL: [https://yusuke-nakakoji-japan.github.io/MyPortfolio](https://yusuke-nakakoji-japan.github.io/MyPortfolio)**

## プロジェクト概要

このリポジトリは、私のポートフォリオサイトのソースコードを管理しています。
Reactを使用した静的Webサイトで、GitHub Pagesでホスティングしています。

## 掲載プロジェクト

現在、以下のプロジェクトを掲載しています：

1. **Recipe Cliper** - YouTubeの料理動画からレシピを自動的に抽出し、Notionデータベースに整理して保存するツール
   - GitHub: [https://github.com/yusuke-nakakoji-japan/recipe-cliper](https://github.com/yusuke-nakakoji-japan/recipe-cliper)
   - 技術: Python, Docker, Gemini API, Notion API, マイクロサービスアーキテクチャ

## 技術スタック

- **フロントエンド**: React, TypeScript
- **スタイリング**: Tailwind CSS
- **ルーティング**: React Router
- **デプロイ**: GitHub Pages

## 開発環境のセットアップ

### 必要条件

- Node.js (v14以上)
- npm (v6以上)

### インストール手順

1. リポジトリをクローンする:
   ```
   git clone https://github.com/yusuke-nakakoji-japan/MyPortfolio.git
   cd MyPortfolio
   ```

2. 依存関係をインストールする:
   ```
   npm install
   ```

3. 開発サーバーを起動する:
   ```
   npm start
   ```
   ブラウザで http://localhost:3000 にアクセスして開発中のサイトを確認できます。

## デプロイ手順

GitHub Pagesへのデプロイは以下の手順で行います：

1. コードの変更をコミットしてGitHubにプッシュ:
   ```
   git add .
   git commit -m "変更内容の説明"
   git push origin main
   ```

2. GitHub Pagesにデプロイ:
   ```
   npm run deploy
   ```

3. 数分後に以下のURLで更新が反映されます:
   https://yusuke-nakakoji-japan.github.io/MyPortfolio

## プロジェクト構造

```
src/
├── components/     # 再利用可能なUIコンポーネント
├── data/           # プロジェクトデータなどの静的データ
├── pages/          # ページコンポーネント
├── App.tsx         # アプリのルーティング設定
└── index.tsx       # エントリーポイント
```

## ライセンス

MIT
