[English](../../../content.md) · [简体中文](../../zh-CN/docs/content.md) · [繁體中文](../../zh-Hant/docs/content.md) · [日本語](../../ja-JP/docs/content.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/content.md) · [Русский](../../ru-RU/docs/content.md) · [Deutsch](../../de-DE/docs/content.md) · [Français](../../fr-FR/docs/content.md) · [Italiano](../../it-IT/docs/content.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="content"></a>

# Índice

Las palabras son interfaz. Las mismas reglas se aplican en cada idioma; Inglés y chino simplificado se escriben primero, el
otros ocho idiomas se traducen de ellos y se revisan.

<a id="voice"></a>

## Voz

Sencillo, específico y tranquilo — un amigo capaz que explica lo que está pasando, no un vendedor y no un archivo de registro.

- **Di lo que pasa.** "Moves 14 artículos a la basura. Puedes restaurarlos de allí." no "¿Estás seguro?"
- **Diga dónde van los datos.** "Sólo en este Mac; nada se carga." "La búsqueda va directamente de este Mac a Apple."
- **Las fallas propias, ofrecen el siguiente paso.** "Algún contenido no se puede cargar. Anteriormente se ha mantenido el contenido cargado".
  "El cheque de actualización no pudo completarse. Intente de nuevo, o revise la red."
- **Sin hype, sin relleno.** Sin "Oops!", sin marcas de exclamación, sin "simply", "justo", "sin problemas", "poderoso".
- **Concreto sobre abstracto.** Nombre de la aplicación, el conteo, el tamaño, el tiempo. "Docker Desktop necesita administrador
  permiso" vence "Permiso requerido".

<a id="wording-rules"></a>

## Reglas de Wording

- **Botones** son verbos que llaman la acción: Instalar, Actualizar todo (4), Mover a la basura, Regresar, Abrir en OpenNavo.
  Las etiquetas de botones en inglés y los elementos del menú usan la caja del título; todo lo demás utiliza el caso de la frase.
- **Títulos** son frases cortas de sustantivo o estados: "Tu lista está vacía", "No hay resultados para "vscode"".
- **Descripción** dos, al menos, poner la acción después de la explicación.
- **Hints** bajo la configuración dicen lo que la opción hace cuando está en, no lo que la etiqueta ya dice.
- **Diálogos de confirmación**: El título hace la pregunta específica ("El trabajo completo" de este Mac?"), el cuerpo declara el
  consecuencia, el botón confirmar repite el verbo.
- **Errores**: lo que salió mal, en los términos del usuario, más qué hacer. Los códigos de error van en detalles o registros, no títulos.
- **Líneas de privacidad** empezar con un icono de cerradura y mantener una línea.
- Use citas rizadas (“ ” ” ), apostrofes reales, el carácter de la elipsis (...), el signo de multiplicación (×) y el
  flecha (→) para los cambios de versión: `1.2.9 → 1.3.0`.
- Los nombres de productos y plataformas mantienen su ortografía: macOS, iPhone, App Store, GitHub, Homebrew. Los nombres de las aplicaciones se muestran como
  el desarrollador los escribe.

<a id="chinese-简体--繁體"></a>

## Chino (segunda / vista)

- 用自然、具体的口语书面语，不写套话和模板句（“一站式”“全方位”“赋能”“轻松实现”之类）。
- 按钮用动词短语：“安装”“全部更新（4）”“移到废纸篓”。不要“确定”“好的”。
- 中文 oficios, âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa âTMa OpenNavo 中打开”；与全角标点相邻时不加。
- 全角标点：，。；：？！“”（）——……；引号用“”，嵌套用‘’。
- 数量用“个”“款”“项”等合适的量词，大数用“万”“亿”（由格式化函数处理）。
- 繁体中文是独立的语言版本：用台湾、香港用户熟悉的词（“軟體”“資料夾”“設定”），不是简体的字形转换。

<a id="numbers-sizes-and-dates"></a>

## Números, tamaños y fechas

Siempre formatear a través de los ayudantes compartidos (`Intl`-basado), nunca por concatenación de cadenas:

| Tipo              | Artículo                                                              | Ejemplos                                |
| ----------------- | --------------------------------------------------------------------- | --------------------------------------- |
| Cuentas           | agrupación local; forma compacta en espacios estrechos                | 17,392 · 1.7 万 · 1,7 тыс.              |
| Tamaños           | Unidades decimales (1 KB = 1000 B), un decimal inferior a 10          | 768 MB · 2.3 GB                         |
| Velocidades       | Tamaño por segundo                                                    | 560,6 KB/s                              |
| Porcentaje        | Números completos a menos que cambien decimales significando          | 62% · 0.8%                              |
| Fechas            | Orden local, mes corto; omitir el año en el año actual                | Oct 23 · 10 de 23 de octubre · 23. Okt. |
| Tiempos relativos | Ahora. → minutos → horas → ayer. → días (menos de una semana) → Fecha | hace 2 horas · 昨oso                    |
| Times             | Reloj las 24 horas en cada idioma                                     | 09:00 · 21:41                           |
| Duración          | Segundos bajo un minuto, luego minutos y segundos                     | 38 s · 2 min 5 s · 2 minutos 5 秒       |
| Versiones         | Como publicado; flechas entre                                         | 4.49.9 → 4.50.0                         |

Las neuronas utilizan las categorías plurales de la localidad (inglés uno/otro; ruso uno/muy/otro; chino y japonés uno
forma) — nunca `item(s)`.

<a id="interface-languages"></a>

## Lenguas de interfaz

| Código    | Idioma   | Notas                                                      |
| --------- | -------- | ---------------------------------------------------------- |
| `en-US`   | Inglés   | Autorización de lenguaje para el texto; caso de sentencia  |
| `zh-CN`   | 简体中文 | Fuente de la verdad para significar en OpenNavo            |
| `zh-Hant` | 繁體中文 | Vocabulario de Taiwán/Hong Kong; las fechas siguen `zh-TW` |
| `ja-JP`   | 日本語   | Polités, concisos; no hay transformaciones de mayúsculas   |
| `es-ES`   | Español  | A menudo 25-35% más que inglés                             |
| `pt-BR`   | (Brasil) | A menudo 25-35% más                                        |
| `ru-RU`   | Русский  | A menudo 30-60% más; cuatro formas plurales                |
| `de-DE`   | Deutsch  | Compuestos largos; permiten envoltura                      |
| `fr-FR`   | Français | Espacio no rompe antes : ; ?                               |
| `it-IT`   | Italiano | A menudo 20-30% más                                        |

Reglas:

- **Diseño para el idioma más largo.** Una etiqueta de barra lateral tiene aproximadamente 152 px a 13.5 px; mide ruso, español y
  Alemán contra él y acortar la traducción en lugar de truncar. Los botones pueden crecer; nunca fijar su anchura.
- **Sin concatenación.** Sentencias enteras con titulares nombrados (`{count}`, `{name}`); los traductores los mueven.
- **Cada local tiene todas las llaves.** Una traducción que falta se remonta al inglés, y el CI comprueba las llaves y los titulares de lugares.
- **Marcas y nombres de productos** no se traducen; el nombre de la aplicación permanece OpenNavo en todos los idiomas.
- **Traducción automática** está marcado como tal donde el contenido (no la interfaz) se traduce automáticamente, con un enlace a
  el original.
