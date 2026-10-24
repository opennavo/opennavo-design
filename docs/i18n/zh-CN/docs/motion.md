[English](../../../motion.md) · **简体中文** · [繁體中文](../../zh-Hant/docs/motion.md) · [日本語](../../ja-JP/docs/motion.md) · [Español](../../es-ES/docs/motion.md) · [Português (Brasil)](../../pt-BR/docs/motion.md) · [Русский](../../ru-RU/docs/motion.md) · [Deutsch](../../de-DE/docs/motion.md) · [Français](../../fr-FR/docs/motion.md) · [Italiano](../../it-IT/docs/motion.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

# 动效

动效用来解释变化，绝不用来装饰。界面的大部分地方根本没有动画。

## 令牌

| 令牌              | 值                               | 用途                                                           |
| ----------------- | -------------------------------- | -------------------------------------------------------------- |
| `duration-fast`   | 120 ms                           | 悬停、按下和获得焦点时的颜色变化；开关；所有退出动画           |
| `duration-base`   | 200 ms                           | 对话框、侧边面板（sheet）、命令面板和轻提示（toast）的进入动画 |
| `duration-slow`   | 320 ms                           | 进度条填充、扫描仪表、主视觉和营销内容的入场                   |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | 状态变化和小幅移动的默认曲线                                   |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | 浮层出现                                                       |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | 任何元素离场，始终配合 `duration-fast`                         |

## 哪些会动

- **状态变化**用 `duration-fast` 渐变颜色（每个可交互控件都加上 `transition-colors duration-fast ease-standard`）。
- **浮层**用强调曲线在 200 ms 内进入，用退出曲线在 120 ms 内离开：居中的对话框从 0.96 倍缩放并淡入，侧边面板从所在的边缘滑入，命令面板从顶部下落 8 px，轻提示上升 8 px。遮罩随面板一起淡入淡出。菜单和悬停提示直接出现，没有动画。
- **进度**的数值以动画变化，绝不往回跳；只在拿到第一个真实数字之前显示不确定状态。
- **营销页面**可以使用缓慢的氛围动效（呼吸般明暗变化的光晕、缓缓漂移的虚线圆环、浮动的图标），但只能动用合成层属性（transform、opacity）。

## 哪些绝不动

- 布局。用户阅读或输入时，内容不滑动、不折叠、不重新排布；见[原则 › 操作时界面保持稳定](principles.md#4-操作时界面保持稳定)。
- 主题切换：颜色在同一帧内完成变化（`applyThemePreference` 会在这一帧禁用过渡）。
- 原地更新的数字（监控、计数器）直接变化，不做补间动画。

## 减弱动态效果

在 `prefers-reduced-motion: reduce` 下，`base.css` 会把所有动画和过渡压缩到 0.01 ms，并取消平滑滚动。不要依赖动画传达信息；最终状态本身必须能说明问题。
