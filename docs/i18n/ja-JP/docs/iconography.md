[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · [繁體中文](../../zh-Hant/docs/iconography.md) · **日本語** · [Español](../../es-ES/docs/iconography.md) · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · [Français](../../fr-FR/docs/iconography.md) · [Italiano](../../it-IT/docs/iconography.md)

> 英語が原文です。翻訳はローカル環境で機械翻訳を用いて作成した草稿で、母語話者による確認が必要です。コードとライセンス原文は変更していません。

<a id="iconography"></a>

# アイコノグラフィー

<a id="interface-icons"></a>

## インターフェイスアイコン

- **セット:** [Lucide](https://lucide.dev) (ISC ライセンス), オフラインサブセットとしてバンドル — リストされているアイコンだけ
  `packages/vue/src/icons/names.ts` 船は、インラインSVGとしてレンダリングされ、 SSR ネットワークなしで。
- **サイズ:** 16 px のメニューとナビゲーション、15 px の `md`/`lg` ボタン、14 px `xs`/`sm` ボタンとチップ、12–13 px
  メタデータとインライン化。14–16 px で 26–32 px のタイルのレンダリングを内部にアイコン化します。
- **打撃および色:** Lucide's 2 px ストローク 24 px, スケール ; アイコンが取る `currentColor`テキストに従うので、
  コンテキストのトークン。ステータスを運ぶ限り、アイコンを独立して表示しないでください。
- **意味:** アプリ全体で1つのアイコン(例) `circle-arrow-down` 更新のため, `shield-check` のための
  セキュリティ、 `eraser` クリーンアップのため)。 アイコンのみのボタンはいつも持っている `aria-label` ツールチップ。
- **アイコンの追加:** パッケージは、そのコンポーネントが描画するアイコンだけをバンドルします。アプリは、独自の機能を追加します。
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`、またはセットで
  ソリューション JSON 形、として扱われる `prefix:name`) 起動時に、そのバンドルは使用しているものだけを運びます。
  コンポーネント自体は、 `packages/vue/src/icons/names.ts`, それから `pnpm gen`. 未知の名前のレンダリング
  開発中の何も警告しない。

<a id="icon-tiles"></a>

## アイコンタイル

小さな正方形のタイルは、機能リスト、設定、通知のアイコンを保持します。 26–40 px、 `rounded-[7–9px]` (または)
`rounded-app-icon` 40 px 以上で、 `bg-surface-raised` とりあえず `text-ink-secondary`、またはステータスの微妙な記入
ステートフルアイテムのステータスカラー。

<a id="app-icons"></a>

## アプリのアイコン

- アプリのアートワークは配達として示されます、 `object-contain`、加えられたマスク無し: macOS アイコンは既にその形状を含みます。
- 作品の欠損は、 **手紙のタイル**: アプリのアクセントの160°勾配(またはその色から派生した)
  識別子) 18%、側面の42%の白い初期値、 `rounded-app-icon`, `shadow-app-icon`.
- コマンドラインツールは、 **ターミナル タイル**: モノスペースの略語で両方の主題の暗い勾配のタイル
  サイドバーとカラーバーの30%。
- 使用中のサイズ: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

<a id="brand-mark"></a>

## ブランドマーク

各アプリは、独自のマークを出荷します。システムコンポーネントは、システムコンポーネントがそれを取る `brand` スロット。 ブランドマークは、この一部ではありません
リポジトリのライセンス()[ブランド](brand.md)).
