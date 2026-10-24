[English](../../../SECURITY.md) · [简体中文](../zh-CN/SECURITY.md) · [繁體中文](../zh-Hant/SECURITY.md) · [日本語](../ja-JP/SECURITY.md) · **Español** · [Português (Brasil)](../pt-BR/SECURITY.md) · [Русский](../ru-RU/SECURITY.md) · [Deutsch](../de-DE/SECURITY.md) · [Français](../fr-FR/SECURITY.md) · [Italiano](../it-IT/SECURITY.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

# Política de seguridad

## Informar de una vulnerabilidad

No publique vulnerabilidades en issues ni pull requests. Envíe a **admin@opennavo.com** el paquete y la versión o commit afectados, los pasos para reproducir el problema y su impacto previsto. Elimine las credenciales y los datos personales de los archivos adjuntos.

Se aceptan informes sobre tratamiento inseguro de HTML y URL, dependencias vulnerables y exposición accidental de datos. Utilice datos ficticios y pruebe solo aplicaciones y dispositivos que controle. Investigaremos y coordinaremos la divulgación con quien informe del problema, sin garantizar un plazo de respuesta.

## Versiones compatibles

Durante la fase de vista previa, las correcciones se aplican a `main` y a la última versión publicada, si existe. No se mantienen por separado las vistas previas antiguas ni los forks.

## Responsabilidades de integración

`OnMarkdownView` renderiza el HTML proporcionado por la aplicación anfitriona. Sanee el HTML no fiable antes de pasarlo al componente y registre únicamente datos SVG fiables. La aplicación es responsable del acceso a los datos, la autenticación y las políticas de contenido. La galería guarda las preferencias de idioma y tema localmente.
