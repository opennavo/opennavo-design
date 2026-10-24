[English](../../../typography.md) · [简体中文](../../zh-CN/docs/typography.md) · [繁體中文](../../zh-Hant/docs/typography.md) · [日本語](../../ja-JP/docs/typography.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/typography.md) · [Русский](../../ru-RU/docs/typography.md) · [Deutsch](../../de-DE/docs/typography.md) · [Français](../../fr-FR/docs/typography.md) · [Italiano](../../it-IT/docs/typography.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="typography"></a>

# Tipografía

<a id="typeface"></a>

## Tipo

Las aplicaciones utilizan **sistema UI fuente** — SF Pro en plataformas de Apple, Segoe UI en Windows — a través de
`@opennavo/design-vue/system-fonts.css`, con las caras CJK de la plataforma para chino y japonés:

| Idioma                                               | Stack (system-fonts.css)                                                          |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| Latin, Cyrillic                                      | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| Chino simplificado`:lang(zh)`)                       | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| Chino tradicional`:lang(zh-Hant)`, `zh-TW`, `zh-HK`) | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| Japonés (Japonés)`:lang(ja)`)                        | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| Código, versiones, caminos                           | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

La fuente del sistema coincide con el sistema operativo, no cuesta descarga y renderiza CJK mejor.
(`font.family.*`, que comienza con Inter) son **apilación de marca** para lugares donde la fuente del sistema no está disponible
o no quería: imágenes de acciones generadas, obras de marketing y la galería de componentes. `lang` on `<html>` (y sigue)
cualquier elemento en otro idioma) por lo que se aplica la pila correcta.

Inter, cuando se utiliza, corre con `font-feature-settings: "cv11", "ss01"` (single-storey a, números alternativos) y
`font-optical-sizing: auto`; `base.css` establece ambos.

<a id="scale"></a>

## Escala

`text-{name}` conjuntos tamaño, altura de línea, peso y seguimiento juntos. Utilice la escala; no establecer tamaños de fuente a mano
excepto los tamaños densos enumerados en Mall text .

| Clase           | Tamaño / altura de la línea | Peso | Seguimiento       | Uso                                                 |
| --------------- | --------------------------- | ---- | ----------------- | --------------------------------------------------- |
| `text-hero`     | 76 / 78                     | 600  | 0.0−35em          | Página de inicio héroe sólo                         |
| `text-section`  | 46 / 50                     | 600  | 0.0−3em           | Epígrafes de la sección del sitio web               |
| `text-display`  | 40 / 44                     | 600  | 0.0−3em           | Direcciones de héroe de la naturaleza               |
| `text-title1`   | 28 / 34                     | 600  | 0.0−2em           | Títulos de página                                   |
| `text-title2`   | 22 / 28                     | 600  | 0.0−2em           | Títulos de diálogo, cabeceras de detalles compactos |
| `text-headline` | 16 / 24                     | 600  | 0.0−1em           | Títulos de sección, títulos de tarjeta              |
| `text-stat`     | 20 / 26                     | 600  | 0.0−15em          | Valores estadísticos                                |
| `text-body`     | 14 / 22                     | 400  | 0                 | Texto del cuerpo                                    |
| `text-body-sm`  | 13 / 20                     | 400  | 0                 | Listas, tablas, filas de configuración              |
| `text-caption`  | 12 / 18                     | 400  | 0                 | Información secundaria                              |
| `text-label`    | 11 / 16                     | 600  | 0,08em, mayúscula | Etiquetas de grupo (secciones laterales, cejas)     |
| `text-mono`     | 12 / 18                     | 400  | 0                 | Comandos, versiones, registros                      |

En las pantallas estrechas las partidas bajan la escala en lugar de reducirse libremente: el héroe de casa es `text-display` infra
768 px, `text-section` de 768 px y `text-hero` de 1024 px; las partidas de hero característica bajan a 36 px por debajo de 768 px.
las ventanas nunca van por debajo de su anchura mínima, por lo que el texto de la aplicación no escala.

<a id="small-text"></a>

### Texto pequeño

Dense de escritorio UI utiliza unos cuantos tamaños entre sí, siempre con fichas de color: 12,5 px para controles compactos y mesa
células, 11.5 px para metadatos bajo una fila, 10.5 px para pequeñas insignias. Nada más pequeño que 10.5 px, y nada debajo
12 px lleva información esencial.

<a id="rules"></a>

## Reglas

- **Números:** uso `tabular-nums` donde los números se alinean o cambian en su lugar (estadística, tablas, progreso,
  contadores, monitores). Números de formato, tamaños y fechas para el locale ([Índice](content.md)).
- **Peso:** 400 para texto, 500 para controles y etiquetas segmentadas, 600 para encabezados, etiquetas de botones y énfasis.
  700+ en la interfaz.
- **Emphasis:** negrita (600) dentro de una frase, nunca de color solo. `**…**` y
  renderizado `text-ink-primary` peso 600 dentro del texto secundario.
- **Maleta superior** sólo a través de `text-label`, y sólo para latín y cirílico; las etiquetas CJK no se transforman.
- **Longitud de la línea:** mantener el texto corporal bajo unos 72 caracteres (o 40 caracteres CJK) por línea; descripciones en héroes
  están tapados alrededor de 430 px.
- **Headings** equilibrar sus líneas (`text-wrap: balance`) en las páginas de marketing; los encabezados de CJK rompen en puntuación, no
  media palabra, donde el navegador permite.
- **Truncation:** trunque etiquetas de una sola línea con una elipsis y exponga el texto completo en un campo de herramientas o `title`;
  Nunca podáis podar números o estatus.
- **CJK spacing:** copy pone un espacio de medio ancho entre CJK y letras o dígitos latinos (" AMB 30 ROS",
  "Éste es el 768 MB") y ninguno al lado de la punción de ancho completo. `text-autospace: normal` en `base.css` sólo llena una brecha la
  copia perdida; nunca reemplaza el espacio en el texto fuente.
