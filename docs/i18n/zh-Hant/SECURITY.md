[English](../../../SECURITY.md) · [简体中文](../zh-CN/SECURITY.md) · **繁體中文** · [日本語](../ja-JP/SECURITY.md) · [Español](../es-ES/SECURITY.md) · [Português (Brasil)](../pt-BR/SECURITY.md) · [Русский](../ru-RU/SECURITY.md) · [Deutsch](../de-DE/SECURITY.md) · [Français](../fr-FR/SECURITY.md) · [Italiano](../it-IT/SECURITY.md)

> 英文為來源文件。新增翻譯由本機離線工具輔助產生，仍需母語審校；程式碼與授權條款原文維持不變。

# 安全政策

## 報告安全漏洞

請勿透過公開 Issue 或 Pull Request 披露漏洞。請傳送郵件至 **admin@opennavo.com**，說明受影響的軟體包、版本或提交、復現步驟和預期影響。附件中不要包含憑據或個人資料。

歡迎報告不安全的 HTML 處理、URL 處理、依賴漏洞及應用資料意外洩露。請使用虛構資料，只在自己控制的應用和裝置上測試。我們會調查並與報告者協調披露，但不承諾固定響應時間。

## 支援的版本

早期預覽期間，修復面向 `main` 和最新發布版（如有）。不單獨維護舊預覽版或分叉版本。

## 接入邊界

`OnMarkdownView` 渲染由宿主應用提供的 HTML。傳入不可信 HTML 前必須清理；註冊圖示時只能使用可信 SVG 資料。應用自身負責資料訪問、身份驗證和內容策略。預覽頁的語言與主題偏好儲存在本機。
