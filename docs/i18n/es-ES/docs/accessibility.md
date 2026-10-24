[English](../../../accessibility.md) · [简体中文](../../zh-CN/docs/accessibility.md) · [繁體中文](../../zh-Hant/docs/accessibility.md) · [日本語](../../ja-JP/docs/accessibility.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/accessibility.md) · [Русский](../../ru-RU/docs/accessibility.md) · [Deutsch](../../de-DE/docs/accessibility.md) · [Français](../../fr-FR/docs/accessibility.md) · [Italiano](../../it-IT/docs/accessibility.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="accessibility"></a>

# Accesibilidad

El objetivo es WCAG 2.2 AA en ambos temas. La mayoría de ellos se construye en las fichas y componentes; esta página enumera lo que
las aplicaciones no deben deshacerse.

<a id="contrast"></a>

## Contraste

- Texto 4.5:1 sobre su fondo real, incluyendo insignias de lata y rellenos de manguera; texto de la pantalla grande (24 px+, o
  19 px+ a 600) 3:1. Las pruebas de token refuerzan los pares en [Color › Contraste](color.md#contrast).
- Iconos que llevan significado, gráficos, fronteras de entrada y el anillo de enfoque: 3:1.
- Texto decorativo (`text.disabled`, marcas de agua) no tiene información.

<a id="keyboard"></a>

## Teclado

- Todo alcanzable con Tab en orden visual; nada enfocable es invisible.
- **Anillo de enfoque:** `shadow-focus-ring` on `:focus-visible` — una brecha de 2 px en el color de la superficie más un anillo de coral de 2 px.
  Nunca lo quites sin un equivalente.
- **widgets compuestos** uso de foco de rotación (una parada de pestañas, flechas dentro): controles segmentados (`radiogroup`), pestañas
  (`tablist`), barras de chip, menús (`menu` con `menuitem` / `menuitemradio`), la paleta de comandos (`combobox` +
  `listbox`).
- **Capas superpuestas** mover el enfoque dentro de la abierta, trampa Tab, cerca de Escape y volver el enfoque al elemento que los abrió.
  El enfoque con movimiento de script no muestra un anillo cuando el usuario abrió el overlay con el puntero.
- **Atajos** seguir la plataforma (búsqueda solubleK, latitud, configuración, solubleF encontrar en una vista, Escapar de nuevo) y se muestran en
  menús e insinuaciones, nunca se requiere.

<a id="screen-readers"></a>

## Lectores de pantalla

- Use el elemento semántico primero (`button`, `a`, `nav`, `main`, `h1`–`h3`, `table`); los componentes añaden funciones únicamente cuando
  HTML no tiene ninguno.
- Los controles Icon-only tienen `aria-label`; iconos decorativos e iconos de aplicación junto a sus nombres son `aria-hidden`.
- Página actual `aria-current="page"`; toggles `role="switch"` con `aria-checked`; botones ocupados `aria-busy`.
- Toasts: fracasos `role="alert"`, otros una región cortés en vivo. El progreso tiene un equivalente de texto ("1.2 de 3.4 GB").
- Los gráficos tienen un resumen de texto o un equivalente de tabla; las líneas de chispa se etiquetan con su valor actual.

<a id="motion-and-timing"></a>

## Motion and timing

- Respeto "reducir movimiento" (`base.css` mangos CSS; JavaScript animación debe comprobar `matchMedia`).
- Toasts pausa mientras se hovered; nada importante desaparece en un temporizador sin una manera de encontrarlo de nuevo (historia,
  lista de tareas).

<a id="pointer-and-touch"></a>

## Puntos y toque

- Metas al menos 24 × 24 px en la interfaz de escritorio densa, 32 px para controles primarios, 44 px para acciones web móviles primarias.
- Hover no revela nada que los usuarios del teclado y del tacto no pueden alcanzar.

<a id="language"></a>

## Idioma

Set `lang` on `<html>` y en cualquier pasaje en otro idioma, por lo que los lectores de pantalla y las fuentes cambian.
significa por el color, la posición o la forma sola: el estado pares color con un icono y una palabra.
