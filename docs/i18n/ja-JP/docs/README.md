[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · [繁體中文](../../zh-Hant/docs/README.md) · **日本語** · [Español](../../es-ES/docs/README.md) · [Português (Brasil)](../../pt-BR/docs/README.md) · [Русский](../../ru-RU/docs/README.md) · [Deutsch](../../de-DE/docs/README.md) · [Français](../../fr-FR/docs/README.md) · [Italiano](../../it-IT/docs/README.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="opennavo-design--specification"></a>

# OpenNavo デザイン — 仕様

OpenNavo デザインは設計システムです OpenNavo アプリケーション: macOS クライアント (Tauri + Vue)、ウェブサイト()Nuxt)と
フォローするアプリです。このフォルダは標準で書かれています。コードパッケージはそれを実装し、トークン参照は
同じソースから生成されるので、ここでの数字は必ずどの船舶にマッチするかを一致させます。

この順序で最初に読んで下さい:

1. [経営理念](principles.md) — システムが最適化するもの、および引数を解決するルール。
2. [色: 色:](color.md) — 表面、テキスト、境界線、ブランド、ステータス、暗闇と光のテーマ、およびその対照規則。
3. [ザミング](theming.md) — 暗くて軽くて「システムに従う」がWeb上で動作する仕組み Tauri, Flutter そして、 SwiftUI,
   別のアプリがシステムを再ブランドする方法。
4. [タイポグラフィ](typography.md), [レイアウト](layout.md) (spacing、半径、高度、appの貝)、 [アクション](motion.md),
   [アイコノグラフィー](iconography.md).
5. [コンポーネント](components.md) — と Vue コンポーネントセットと各パートを使用するとき。
6. [パターン](patterns.md) — ナビゲーション、リスト、フォーム、フィードバック、破壊的なアクション、読み込み、空の状態、
   許可、メニューバーのポップアップ。
7. [コンテンツ](content.md) — 声、言葉遣いのルール、数字、日付、10つのインターフェイス言語。
8. [アクセス可能](accessibility.md) そして、 [プラットフォーム](platforms.md) (macOS デスクトップ、ウェブ、 Flutter, SwiftUI).
9. [ブランド](brand.md) — ブランドレイヤー、名前、ロゴ。
10. [導入事例](adoption.md) — システム上で新しいアプリを起動し、コピーしたアプリを移動 OpenNavoパッケージ。

参考: [すべてのトークン](reference/tokens.md) (から生成される) `tokens/tokens.json`;手で編集しないでください)。

<a id="conventions-in-this-spec"></a>

## この仕様の条約

- **必要事項** そして、 **決してない** ルールです。レビューはそれらをブロックする必要があります。 **すべきこと** 理由が必要なデフォルトは
  休憩。他のすべてがガイダンスです。
- トークン名は、その名前として書かれています。 JSON パス (path)`surface.card`)、と、 CSS 変数 (`--on-surface-card`) または
  ユーティリティクラス(`bg-surface-card`) コンテキストがコードである場合。
- 測定はあります CSS ピクセル(Appleプラットフォーム、論理的ピクセルのポイント) Flutter).
- 事例紹介 OpenNavo. 兄弟アプリは、構造を維持し、ブランドレイヤーを交換します()[ブランド](brand.md)).
