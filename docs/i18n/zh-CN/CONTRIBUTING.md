[English](../../../CONTRIBUTING.md) · **简体中文** · [繁體中文](../zh-Hant/CONTRIBUTING.md) · [日本語](../ja-JP/CONTRIBUTING.md) · [Español](../es-ES/CONTRIBUTING.md) · [Português (Brasil)](../pt-BR/CONTRIBUTING.md) · [Русский](../ru-RU/CONTRIBUTING.md) · [Deutsch](../de-DE/CONTRIBUTING.md) · [Français](../fr-FR/CONTRIBUTING.md) · [Italiano](../it-IT/CONTRIBUTING.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

<a id="contributing"></a>

# 捐款

谢谢你的帮助。 OpenNavo 设计取自 OpenNavo 应用软件并与之并存; 更改
应该让家里的每个应用都继续工作

<a id="ground-rules"></a>

## 基本规则

- **托肯斯为先.** 变动 `tokens/tokens.json`运行 `pnpm gen`中,将生成的文件与更改一起输入。从不
  编辑一个标记为 create 的文件.
- **两个主题。** 每个新颜色符号都有暗色 `value` 当它不同时, `light` 值。添加或更新 a
  任何新文本/背景对的对比测试( Q)`packages/tokens/tests`).
- **角色,不是外观。** 如果已有的符号有正确的颜色, 但错误的工作, 则为该任务添加一个符号 。
  ([文件/原则.md](docs/principles.md#rules-that-settle-arguments)).
- **部件是通用的。** 没有产品名称、产品数据形状或网络调用 `packages/vue`; 应用程序通过
  内容通过道具和插槽。
- **医生用代码移动。** 一个新的符号、组件道具或行为更新匹配页面 `docs/`.
- **英语第一。** 文档、源评论、错误和开发者工具默认为英语。英语( )`en-US`)是组件字符串的源语言;保留明确本地化的内容.
- **十种语言.** 新建组件字符串进入全部十个信件文件 `packages/vue/src/messages`,带有匹配的密钥和占位符。英语仍然是默认;不要从浏览器设置中推断语言。

<a id="checks"></a>

## 检查

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

CI运行相同的命令.

<a id="commits-and-pull-requests"></a>

## 提交和拉动请求

小型、有重点的拉动请求,其中简短地描述两个主题中用户可见的变化和截图。
通过贡献,你同意你的贡献是特许的 MIT 此许可证
存储器。

<a id="security-review-before-commits"></a>

## 实施前的安全审查

运行 `pnpm secrets:worktree` 在准备修改时,然后显示预定的文件并运行 `pnpm secrets:staged`.
运行 `pnpm secrets:history` 这些命令需要 Go 1. 23+ 和网络访问
第一次下载 被绑定 Gitleaks 扫描仪。扫描仪故障会阻断检查; 请不要绕过它 。

审查每个已完成阶段的文件和完整的已完成阶段的diff,包括已有的更改,生成的文件和资产.
不输入证书、 私人密钥、 真实环境配置、 私人服务地址或个人数据 。
使用占位符和虚构的固定装置。 忽略一个文件一旦被跟踪或设定, 就不会保护它 。
确认二进制附件可以公开。 扫描结果只显示路径、 行号和规则 ID ;
干净扫描不会取代手动审查。在任何阶段内容更改后重新检查。

私下报告脆弱性 [警卫](SECURITY.md)。不要在公共问题或日志中包含秘密。

使用英语常规提交信件和英语 GitHub 描述改变什么,
为什么, 以及哪些检查实际运行。 不要将本地测试描述为通过远程CI 。 API 稳定不是
在 1.0 之前承诺; 文档打破更改日志中的更改 。

<a id="translations-and-previews"></a>

## 翻译和预览

英语是所有10种语言的来源: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` 财务报告和已审计财务报表 `it-IT`。组件信息存在于 `packages/vue/src/messages`; 图片库消息存在
`packages/vue/gallery/src/messages`翻译可见故事副本以及导航和可访问标签。
保持组件名称,enum值,URL,代码样本和许可证原件不变.

完整的文档镜像存在于 `docs/i18n/<locale>/`,遵循英语寄存器路径。
新的翻译开始为离线机辅助草稿,需要语言审查,特别是技术和法律
散文 英文仍然具有权威性 与普通葡萄牙语分开审查巴西葡萄牙语词汇.
当英语更改时, 更新每种语言中的相应文件, 然后将其 SHA-256 记录在
`docs/i18n/manifest.json`运行 `pnpm check:i18n` 以验证覆盖、源新度、链接和代码示例。
不要只为了不更新译文就对失败保持沉默而更新清单。

读取 EADME 截图 `docs/previews` 显示真实画廊的虚构样本数据。
浏览器在文献中的主题和语言上使用,没有浏览器染色体或个人信息.
