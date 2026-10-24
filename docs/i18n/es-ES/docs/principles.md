[English](../../../principles.md) · [简体中文](../../zh-CN/docs/principles.md) · [繁體中文](../../zh-Hant/docs/principles.md) · [日本語](../../ja-JP/docs/principles.md) · **Español** · [Português (Brasil)](../../pt-BR/docs/principles.md) · [Русский](../../ru-RU/docs/principles.md) · [Deutsch](../../de-DE/docs/principles.md) · [Français](../../fr-FR/docs/principles.md) · [Italiano](../../it-IT/docs/principles.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="principles"></a>

# Principios

OpenNavo aplicaciones administran cosas que la gente se preocupa en su propio equipo: lo que se instala, lo que funciona en el login, lo que
se elimina, lo que habla con la red. La interfaz tiene que sentirse tranquila y confiable antes de que se sienta inteligente.
Estos principios deciden las compensaciones; el resto de la especificaciones los aplica.

<a id="1-content-first-chrome-recedes"></a>

## 1. Contenido primero, cromo recedes

Las superficies son casi neutrales y se pisan por pequeñas cantidades; las fronteras son líneas de pelo. El color está reservado para el significado — el
acento de marca para una cosa a hacer siguiente, colores de estado para el estado — nunca para la decoración. Si una pantalla necesita una
fondo de color para mirar acabado, la jerarquía está equivocada.

- Dos temas, ambos de primera clase. La oscuridad es el aspecto predeterminado de la marca; la luz no es un filtro sobre ella.
  token tiene un valor para cada tema, y ambos se revisan para el contraste en CI ([Color](color.md)).
- Los flujos y los gradientes se permiten en exactamente dos lugares: características de héroes y la marca. Son más suaves en la luz
  Modo.

<a id="2-say-what-will-happen-then-do-exactly-that"></a>

## 2. Di lo que sucederá, entonces haz exactamente eso

Antes de que cualquier cosa cambie la máquina del usuario, la interfaz indica el efecto en palabras sencillas y, donde ayuda, muestra
el comando real o la lista de archivos. Los botones llaman la acción ("Desinstalar", "Move to Trash"), no "OK".
"Nada sucede hasta que confirmas" es una promesa que el código mantiene.

- Las acciones destructivas confirman, y por defecto a la variante reversible (Trash antes de eliminar, deshable antes de eliminar).
- Después de la acción, el resultado aparece donde el usuario lo inició, a la vez ([Pautas › Los resultados se resuelven a la vez](patterns.md#loading-progress-and-results)).

<a id="3-local-first-and-say-so"></a>

## 3. Local primero, y decir así

Los datos leídos de la máquina del usuario se quedan allí a menos que elijan lo contrario. Donde la interfaz lee algo
sensible (uso de disco, elementos de arranque, conexiones de red), una nota de una línea dice dónde van los datos - generalmente
"Sólo en este Mac; nada se carga". Cuando algo va a un servidor, la copia nombra al servidor.

<a id="4-stable-under-the-pointer"></a>

## 4. Stable under the pointer

El diseño nunca se vacía y rellena mientras el usuario está interactuando con él. Tecleando en un campo de búsqueda, cambiando un
ordenar, paging o un refresco de fondo mantiene el contenido anterior hasta que el nuevo contenido esté listo, y líneas opcionales
reservar su espacio. Los esqueletos son para la primera carga de una vista solamente. Un refrescante fallido mantiene el último buen contenido
y lo dice en una pancarta. La gente lee flicker como "la aplicación está rota".

<a id="5-respect-the-platform"></a>

## 5. Respetar la plataforma

- **macOS:** Luces de tráfico nativo y comportamiento de barra de título, Configuración de sistema enlaces profundos para permisos, elementos de barra de menú
  que se comportan como el sistema (templa imágenes, nunca activando la aplicación o robando foco), atajos de teclado
  que coincida con el Mac (búsqueda soluble, latitud, ajustes, Escape cierra).
- **Web:** páginas de servidor rápidos que se pueden encaminar y compartir, así que nada en el HTML depende del visitante;
  las opciones por-visitor (tema, sugerencia de idioma, consentimiento) se aplican en el navegador.
- **Herramientas nativas** (SwiftUI, Flutter) utilizar las mismas fichas con los propios controles de la plataforma y la fuente del sistema.

<a id="6-quiet-by-default"></a>

## 6. Silencio por defecto

Usar la retroalimentación más ligera que hace el trabajo: inline estado para las cosas que persisten, un brindis por una acción completa, un
banner para una vista degradada, un diálogo sólo cuando el usuario debe decidir. Nunca interrumpir para la información.
fuera de la ventana están opt-in y dicen por qué vinieron.

<a id="7-one-system-for-every-app"></a>

## 7. Un sistema para cada aplicación

Tokens, no valores: no hay colores codificados duros, radios o duraciónes en el código de aplicación. Componentes, no one-offs.
es la única parte que cambia una aplicación de hermano ([Marca](brand.md)). Cuando un diseño necesita algo que el sistema carece, añadirlo a
el sistema primero.

<a id="8-accessible-by-construction"></a>

## 8. Accesible por construcción

Texto se reúne WCAG 2.2 AA (4.5:1) en ambos temas, gráficos e indicadores de enfoque 3:1. Todo funciona desde el teclado
con un anillo de enfoque visible. Moción respeta "reducir movimiento". Los componentes llevan sus roles ARIA así que las aplicaciones no tienen que
(Recuérdelos)[Accesibilidad](accessibility.md)).

<a id="9-every-language-fits"></a>

## 9. Cada idioma cabe

Los barcos de interfaz en diez idiomas. Los diseños están diseñados para la etiqueta más larga (ruso y alemán corren 30–60%
más tiempo que el inglés; chino y japonés son más cortos pero más altos), números y fechas se formatean por local, y
nada está concatenado de fragmentos ([Índice](content.md)).

<a id="rules-that-settle-arguments"></a>

## Reglas que resuelven los argumentos

1. **Token, no valor.** Si falta un valor, agregue una ficha con ambos valores temáticos.
2. **Mismo valor oscuro, trabajo diferente → diferente token.** Relleno de palanca, panel flotante y segmento seleccionado todo look
   `#262626` en modo oscuro pero necesita diferentes valores de luz (`surface.raised`, `surface.popover`,
   `component.segmentActive`). Dividir roles temprano.
3. **Una acción primaria por región.** Las acciones secundarias son botones secundarios o fantasmas; las acciones destructivas son
   botones de peligro y nunca son el foco predeterminado.
4. **Los controles Icon-only necesitan una etiqueta** (`aria-label` y una herramienta) y debe ser reconocible iconos.
5. **Una carga fallida nunca en blanco la pantalla** que tenía contenido.
6. **Si cambia la máquina, confirma o se puede deshacer** - Preferiblemente ambas.
