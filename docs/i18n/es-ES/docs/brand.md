[English](../../../brand.md) · [简体中文](../../zh-CN/docs/brand.md) · [繁體中文](../../zh-Hant/docs/brand.md) · [日本語](../../ja-JP/docs/brand.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/brand.md) · [Русский](../../ru-RU/docs/brand.md) · [Deutsch](../../de-DE/docs/brand.md) · [Français](../../fr-FR/docs/brand.md) · [Italiano](../../it-IT/docs/brand.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="brand"></a>

# Marca

OpenNavo El diseño es compartido por una familia de aplicaciones. Comparten todo excepto una capa de marca fina, por lo que una persona que sabe
una aplicación ya conoce a los demás.

<a id="the-brand-layer"></a>

## La capa de la marca

Una aplicación sólo puede cambiar estas fichas (con ambos valores temáticos):

| Token de diseño                                                                      | Lo que lleva                                                                                                  |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                                                        | El relleno de acento: botones de acento, toggles en, progreso, el color de anillo de enfoque, puntos pequeños |
| `text.accent`                                                                        | Texto y enlaces de color Accent                                                                               |
| `accent.coralSubtle`                                                                 | Tintes de ascenso detrás de chips y pistas de progreso                                                        |
| `button.accentBg`, `button.accentHover`, `button.accentPressed`, `button.accentText` | El botón de acento                                                                                            |
| `shadow.focusRing`                                                                   | El anillo de enfoque (mantenga la brecha de 2 px + 2 px de la forma de anillo)                                |
| `component.runningBorder`                                                            | La frontera de una tarea en marcha                                                                            |
| `brand.salmon`, `accent.salmonSubtle`                                                | Texto y placas de énfasis cálido                                                                              |
| `brand.violet`, `effect.heroGlow`, `effect.coverGlow`                                | El héroe brilla                                                                                               |
| `brand.logoGradient`, `brand.logoCoreGradient`                                       | La propia marca de la aplicación                                                                              |

Los nombres de fichas se mantienen iguales (`brand.coral` mantiene su nombre incluso cuando el acento de una aplicación es azul) así que componentes y docs
nunca se fork. Generar fichas de una aplicación con un archivo de override ([Theming › Re-branding](theming.md#re-branding-another-app))
y mantener las pruebas de contraste verde: el texto de acento todavía debe alcanzar 4.5:1 en ambos temas y el acento llenar 3:1.

Todo lo demás — neutros, colores de estado, tipo, espaciamiento, radio, movimiento, componentes y patrones— es lo mismo en
cada aplicación.

<a id="names-and-marks"></a>

## Nombres y marcas

- Cada aplicación tiene su propio nombre y marca. Los componentes toman la marca a través de una `brand` ranura; el sistema de diseño no se envía
  logo.
- El OpenNavo nombre y logotipo son marcas comerciales de los OpenNavo autores y son **no** cubiertos por el repositorio MIT
  licencia[TRADEMARKS.md](../TRADEMARKS.md)). Las aplicaciones construidas en el sistema no deben utilizarlas como su propio nombre o icono.
- El prefijo del componente `On` y el CSS prefijo `--on-` pertenecen al sistema, no a un producto; mantenerlos.

<a id="using-the-mark-well-for-opennavo-itself"></a>

## Usar bien la marca (para OpenNavo en sí mismo)

- La marca de palabras se sienta al lado de la marca a 15 px, peso 600, en `brand.coral`; la marca es de 22 px de alto al lado de ella.
- Debajo de 32 px la marca utiliza su geometría simplificada. Mantenga el espacio claro de al menos la mitad de la altura de la marca.
- En los fondos ligeros la estrella en la marca cambia al gradiente del núcleo ámbar; nunca coloque la marca en una imagen ocupada.
