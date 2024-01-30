# 304-unissuedInvoiceReminder

請求書未発行リマインダー

## 開発手順

1. ローカル開発環境設定をkintoneへアップロードする

```bash {iscopy=true}
npm run upload:local
```

2. developmentを実行する

```bash {iscopy=true}
npm run dev
```

3. 変更を加える

## 運用方法

本番用にビルドして、kintoneへアップロードする

```bash {iscopy=true}
npm run deploy
```

## 開発環境

- NodeJS ^v20.11.0
- VSCode Live Server
- グローバル環境

```bash {iscopy=true}
npm install -g dotenv-cli
```

- パッケージのダウンロード
  
```bash {iscopy=true}
npm install
```
