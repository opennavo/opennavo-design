# OpenNavo Design 规范

> 英文原文：[README.md](../README.md)。两者不一致时以英文版为准。

OpenNavo Design 是 OpenNavo 系列应用的设计系统，覆盖 macOS 客户端（Tauri + Vue）、网站（Nuxt），以及之后推出的应用。这些文档是成文的标准：代码包负责实现它，令牌参考与代码由同一份源文件生成，所以这里的数值始终与实际发布的版本一致。

第一次阅读，建议按以下顺序：

1. [原则](principles.md)——这套系统看重什么，以及出现分歧时用来裁决的规则。
2. [颜色](color.md)——表面、文字、边框、品牌色、状态色；深色和浅色两套主题，以及它们的对比度规则。
3. [主题](theming.md)——深色、浅色和“跟随系统”在网页、Tauri、Flutter 和 SwiftUI 中怎样实现，以及其他应用怎样换上自己的品牌。
4. [文字排版](typography.md)、[布局](layout.md)（间距、圆角、层级、应用外壳）、[动效](motion.md)、[图标](iconography.md)。
5. [组件](../components.md)（组件篇暂为英文）——Vue 组件集，以及每个组件该在什么场合使用。
6. [交互模式](patterns.md)——导航、列表、表单、反馈、破坏性操作、加载和空状态、权限、菜单栏浮窗。
7. [文案](content.md)——语气、措辞规则、数字和日期、十种界面语言。
8. [无障碍](accessibility.md)和[平台](platforms.md)（macOS 桌面端、网页、Flutter、SwiftUI）。
9. [品牌](brand.md)——品牌层、名称和标志。
10. [接入](adoption.md)——在这套系统上新建应用，以及迁移复制过 OpenNavo 代码包的应用。

参考：[全部令牌](../reference/tokens.md)（英文，由 `tokens/tokens.json` 生成，请勿手动修改）。

## 本规范的约定

- **必须**和**不得**（也写作“绝不”）是规则，评审时应当据此拦下不合规的改动。**应当**是默认做法，不照做需要有理由。其余内容都是指导意见。
- 令牌名称按 JSON 路径书写（`surface.card`）；涉及代码时，附上 CSS 变量（`--on-surface-card`）或工具类（`bg-surface-card`）。
- 尺寸以 CSS 像素为单位（在 Apple 平台上对应点，在 Flutter 中对应逻辑像素）。
- 示例都取自 OpenNavo。同系列的其他应用保留同样的结构，只替换品牌层（[品牌](brand.md)）。
