# MyPortfolio

私のポートフォリオサイトのリポジトリです。

## プロジェクト概要
このリポジトリは、私のポートフォリオサイトのソースコードを管理しています。

## 技術スタック
- フロントエンド: React
- スタイリング: Tailwind CSS
- デプロイ: GitHub Pages

## 開発環境のセットアップ
1. リポジトリをクローン
2. 依存関係のインストール
   ```bash
   npm install
   ```
3. 開発サーバーの起動
   ```bash
   npm start
   ```

## デプロイ方法
1. ビルドの実行
   ```bash
   npm run build
   ```
2. GitHub Pagesへのデプロイ
   ```bash
   npm run deploy
   ```

## 注意事項
- GitHub Pagesでホスティングする場合は、`package.json`の`homepage`フィールドを自身のGitHubユーザー名に合わせて更新してください。
- ルーティングには`HashRouter`を使用しているため、URLは`https://[username].github.io/MyPortfolio/#/`の形式になります。

## ライセンス
MIT 