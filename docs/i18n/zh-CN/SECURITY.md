[English](../../../SECURITY.md) · **简体中文** · [繁體中文](../zh-Hant/SECURITY.md) · [日本語](../ja-JP/SECURITY.md) · [Español](../es-ES/SECURITY.md) · [Português (Brasil)](../pt-BR/SECURITY.md) · [Русский](../ru-RU/SECURITY.md) · [Deutsch](../de-DE/SECURITY.md) · [Français](../fr-FR/SECURITY.md) · [Italiano](../it-IT/SECURITY.md)

> 英文为源文。新增翻译由本机离线工具辅助生成，仍需母语审校；代码和许可证原文保持不变。

# 安全政策

## 报告安全漏洞

请勿通过公开 Issue 或 Pull Request 披露漏洞。请发送邮件至 **admin@opennavo.com**，说明受影响的软件包、版本或提交、复现步骤和预期影响。附件中不要包含凭据或个人数据。

欢迎报告不安全的 HTML 处理、URL 处理、依赖漏洞及应用数据意外泄露。请使用虚构数据，只在自己控制的应用和设备上测试。我们会调查并与报告者协调披露，但不承诺固定响应时间。

## 支持的版本

早期预览期间，修复面向 `main` 和最新发布版（如有）。不单独维护旧预览版或分叉版本。

## 接入边界

`OnMarkdownView` 渲染由宿主应用提供的 HTML。传入不可信 HTML 前必须清理；注册图标时只能使用可信 SVG 数据。应用自身负责数据访问、身份验证和内容策略。预览页的语言与主题偏好保存在本机。
