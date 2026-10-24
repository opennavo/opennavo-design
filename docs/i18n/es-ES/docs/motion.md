[English](../../../motion.md) · [简体中文](../../zh-CN/docs/motion.md) · [繁體中文](../../zh-Hant/docs/motion.md) · [日本語](../../ja-JP/docs/motion.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/motion.md) · [Русский](../../ru-RU/docs/motion.md) · [Deutsch](../../de-DE/docs/motion.md) · [Français](../../fr-FR/docs/motion.md) · [Italiano](../../it-IT/docs/motion.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="motion"></a>

# Motion

Motion explica un cambio; nunca decora. La mayor parte de la interfaz no anima en absoluto.

<a id="tokens"></a>

## Tokens de diseño

| Token de diseño   | Valor                            | Uso                                                                          |
| ----------------- | -------------------------------- | ---------------------------------------------------------------------------- |
| `duration-fast`   | 120 ms                           | Cambios de color en la palanca, la prensa y el enfoque; toggles; cada salida |
| `duration-base`   | 200 ms                           | Dialogs, sábanas, la paleta de comandos y tostadas que entran                |
| `duration-slow`   | 320 ms                           | Progreso de llenado, medidores de escaneo, entradas de héroe y marketing     |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Predeterminado para cambios estatales y pequeños movimientos                 |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | Superpuestos que llegan                                                      |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | Cualquier cosa que se vaya, siempre con `duration-fast`                      |

<a id="what-moves"></a>

## ¿Qué movimientos?

- **Cambios de Estado** colores de moda con `duration-fast` (`transition-colors duration-fast ease-standard` en cada uno
  control interactivo).
- **Capas superpuestas** entrar en 200 ms con la curva enfatizada y salir en 120 ms con la curva de salida: diálogos centrados
  descoloración y escala desde 0.96, las hojas se deslizan desde su borde, la paleta de comandos cae 8 px desde la parte superior, los brindis suben
  8 px. El scrim se desvanece con su panel. Menús y puntas de herramientas aparecen sin animación.
- **Progresos** anima su valor, nunca salta hacia atrás, y muestra un estado indeterminado sólo hasta el primer real
  llega el número.
- **Páginas de comercialización** puede utilizar el movimiento ambiente lento (un resplandor, anillos desgarrados en deriva, iconos flotantes) en el
  compositor (transforme, opacidad) sólo.

<a id="what-never-moves"></a>

## Lo que nunca se mueve

- Diseño. El contenido no se desliza, colapsa o rebosa mientras el usuario lee o escribe; véase
  [Principios › Estable bajo el puntero](principles.md#4-stable-under-the-pointer).
- Interruptores temáticos: los colores cambian en un solo marco (`applyThemePreference` transiciones deshabilitadas para ese marco).
- Los números que se actualizan en su lugar (monitores, contadores) cambian sin retorcer.

<a id="reduced-motion"></a>

## Reducción del movimiento

`base.css` abraza cada animación y transición a 0.01 ms bajo `prefers-reduced-motion: reduce`, y elimina suave
No confíe en una animación para transmitir información; el estado final debe tener sentido por sí mismo.
