[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · [繁體中文](../../zh-Hant/docs/README.md) · [日本語](../../ja-JP/docs/README.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/README.md) · [Русский](../../ru-RU/docs/README.md) · [Deutsch](../../de-DE/docs/README.md) · [Français](../../fr-FR/docs/README.md) · [Italiano](../../it-IT/docs/README.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="opennavo-design--specification"></a>

# OpenNavo Diseño - especificación

OpenNavo El diseño es el sistema de diseño del OpenNavo aplicaciones: las macOS clienteTauri + Vue), el sitio web (Nuxt) y el
aplicaciones que las siguen. Esta carpeta es el estándar escrito. Los paquetes de código lo implementan, y la referencia token es
generada de la misma fuente, por lo que los números aquí siempre coinciden con lo que los barcos.

Lea en este orden la primera vez:

1. [Principios](principles.md) — lo que el sistema optimiza, y las reglas que resuelven los argumentos.
2. [Color](color.md) — superficies, texto, fronteras, marca, estado; los temas oscuros y ligeros y sus reglas de contraste.
3. [Theming](theming.md) — cómo oscuro, ligero y "seguir el sistema" funcionan en la web, en Tauri, Flutter y SwiftUI,
   y cómo otra aplicación vuelve a marcar el sistema.
4. [Tipografía](typography.md), [- ¿Qué?](layout.md) (spacing, radius, altitud, app shell), [Motion](motion.md),
   [Iconografía](iconography.md).
5. [Componentes](components.md) - el Vue conjunto de componentes y cuándo utilizar cada parte.
6. [Patrones](patterns.md) — navegación, listas, formas, retroalimentación, acciones destructivas, estados cargados y vacíos,
   permisos, bar de menús popovers.
7. [Índice](content.md) — voz, reglas de redacción, números y fechas, los diez idiomas de interfaz.
8. [Accesibilidad](accessibility.md) y [Plataformas](platforms.md) (macOS escritorio, web, Flutter, SwiftUI).
9. [Marca](brand.md) — la capa de marca, nombres y logos.
10. [Adopción](adoption.md) - iniciando una nueva aplicación en el sistema, y moviendo una aplicación que copia OpenNavoEs paquetes.

Referencia: [todas las fichas](reference/tokens.md) (generado de `tokens/tokens.json`; no editar a mano).

<a id="conventions-in-this-spec"></a>

## Convenciones en esta especificaciones

- **Debe ser** y **nunca jamás nunca jamás nunca jamás jamás jamás jamás nunca jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás jamás** son reglas; una revisión debe bloquear sobre ellas. **Debería.** es el defecto que necesita una razón para
  Todo lo demás es guía.
- Los nombres de las fichas están escritos como sus JSON camino (`surface.card`), con el CSS variable`--on-surface-card`) o el
  clase de utilidad (`bg-surface-card`) donde el contexto es el código.
- Las mediciones son CSS pixels (puntos en las plataformas de Apple, píxeles lógicos en Flutter).
- Ejemplos provienen de OpenNavo. Una aplicación de hermano mantiene la estructura y cambia la capa de la marca ([Marca](brand.md)).
