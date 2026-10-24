[English](../../../CONTRIBUTING.md) · [简体中文](../zh-CN/CONTRIBUTING.md) · [繁體中文](../zh-Hant/CONTRIBUTING.md) · [日本語](../ja-JP/CONTRIBUTING.md) · **Español** · [Português (Brasil)](../pt-BR/CONTRIBUTING.md) · [Русский](../ru-RU/CONTRIBUTING.md) · [Deutsch](../de-DE/CONTRIBUTING.md) · [Français](../fr-FR/CONTRIBUTING.md) · [Italiano](../it-IT/CONTRIBUTING.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="contributing"></a>

# Contribución

Gracias por ayudar. OpenNavo El diseño se extrae del OpenNavo aplicaciones y se mantiene junto a ellas; cambios
debe mantener todas las aplicaciones en la familia trabajando.

<a id="ground-rules"></a>

## Reglas de base

- **Tokens primero.** Cambio `tokens/tokens.json`, corre `pnpm gen`, comprometer los archivos generados con el cambio. Nunca
  editar un archivo marcado generated .
- **Ambos temas.** Cada nuevo token de color tiene una oscuridad `value` y, cuando difiere, a `light` valor. Añadir o actualizar un
  prueba de contraste para cualquier nuevo par de texto / segundo plano (`packages/tokens/tests`).
- **Papeles, no miradas.** Si un token existente tiene el color correcto, pero el trabajo incorrecto, añadir un token para el trabajo
  ([docs/principles.md](docs/principles.md#rules-that-settle-arguments)).
- **Los componentes se mantienen genéricos.** No hay nombres de productos, formas de datos de productos o llamadas de red `packages/vue`; las aplicaciones pasan
  contenido a través de propulsores y ranuras.
- **Los doctores se mueven con el código.** Un nuevo token, componente prop o comportamiento actualiza la página de coincidencia en `docs/`.
- **Inglés primero.** Documentación, comentarios de fuente, errores y herramientas de desarrollador por defecto al inglés.`en-US`) es el lenguaje fuente de las cadenas de componentes; preservar contenido localizado explícitamente.
- **Diez idiomas.** Nuevas cadenas de componentes entran en los diez archivos de mensajes en `packages/vue/src/messages`, con las teclas de coincidencia y los titulares de posición. El inglés sigue siendo el predeterminado; no infiere un idioma de la configuración del navegador.

<a id="checks"></a>

## Checks

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

El CI dirige los mismos comandos.

<a id="commits-and-pull-requests"></a>

## Compromisos y solicitudes de retiro

Pequeñas y enfocadas solicitudes de tiradas con una breve descripción del cambio visual del usuario y capturas de pantalla en ambos temas para
cualquier cosa visual. Al contribuir usted está de acuerdo en que su contribución está bajo la licencia MIT Licencia de este
repositorio.

<a id="security-review-before-commits"></a>

## Examen de la seguridad antes de comprometerse

Corre `pnpm secrets:worktree` mientras se preparan los cambios, luego escenifique los archivos previstos y corra `pnpm secrets:staged`.
Corre `pnpm secrets:history` antes de publicar la historia alcanzable. Estos comandos requieren Go 1.23+ y acceso a la red
para la primera descarga del pinned Gitleaks Un fallo del escáner bloquea el cheque; no lo desvíe.

Revise cada archivo escalonado y el diff escenificado completo, incluyendo los cambios existentes, archivos generados y activos.
No comprometer credenciales, claves privadas, configuración del entorno real, direcciones de servicio privadas o datos personales.
Usar marcadores de posición y accesorios ficticios. Ignorar un archivo no lo protege una vez que sea rastreado o escenificado.
Confirme que los archivos adjuntos binarios pueden hacerse públicos. Los resultados de la exploración sólo muestran caminos, números de línea y ID de reglas;
un escaneo limpio no reemplaza la revisión manual. Reprobar después de cualquier cambio de contenido en estadio.

Reportar vulnerabilidades privadamente utilizando [SEGURIDAD](SECURITY.md). Nunca incluir secretos en cuestiones o registros públicos.

Usar mensajes convencionales en inglés y en inglés GitHub Describe lo que cambió,
¿Por qué, y qué cheques realmente corrieron? No describir las pruebas locales como CI remoto de paso. API la estabilidad no
prometido antes de 1.0; documentos de ruptura de cambios en el cambio.

<a id="translations-and-previews"></a>

## Traducciones y previsualizaciones

El inglés es la fuente de los diez idiomas: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` y `it-IT`. Los mensajes de componentes viven en `packages/vue/src/messages`; mensajes de galería en vivo
`packages/vue/gallery/src/messages`. Traducir copia de la historia visible, así como la navegación y etiquetas accesibles.
Mantenga los nombres de componentes, valores enum, URLs, muestras de código y originales de licencia sin cambios.

Los espejos de documentación completos viven en `docs/i18n/<locale>/`, siguiendo los caminos del repositorio inglés.
Las nuevas traducciones comienzan como borradores con ayuda de máquina fuera de línea y necesitan revisión de idiomas, especialmente técnica y jurídica
prose. El inglés sigue siendo autoritativo. Revisar el vocabulario portugués brasileño por separado del portugués genérico.
Cuando el inglés cambia, actualiza los archivos correspondientes en cada idioma y luego registra su SHA-256 en
`docs/i18n/manifest.json`Corre `pnpm check:i18n` para verificar cobertura, frescura fuente, enlaces y ejemplos de código.
No actualice el manifiesto simplemente para silenciar un fracaso sin actualizar las traducciones.

Pantallas README en `docs/previews` Mostrar datos de la muestra ficticia de la galería real.
uso del navegador en el tema y el idioma documentados, sin cromo del navegador o información personal.
