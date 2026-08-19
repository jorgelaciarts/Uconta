# Índice General — Línea de Tiempo por Pilar

Página web con índice navegable y buscable de las iniciativas por pilar (Mantenciones, Experiencia Usuario, Revisión Cuentas, Matriz Riesgos, Otros). Pensada para irse actualizando en el tiempo sin tocar el diseño.

## Archivos

```
index.html   → estructura y diseño de la página (no es necesario editarlo)
data.js      → todas las entradas del índice (esto es lo único que editas)
README.md    → este archivo
```

## Cómo agregar nueva información

Abre `data.js` y agrega un nuevo bloque dentro del arreglo `RECORDS`:

```js
{ exp: "EXP-2026-015", pillar: "otros", title: "Nombre de la iniciativa", period: "Noviembre" },
```

Campos:

| Campo | Valores posibles |
|---|---|
| `exp` | Código correlativo, ej. `EXP-2026-015` |
| `pillar` | `mantenciones` · `experiencia` · `revision` · `riesgos` · `otros` |
| `title` | Nombre de la iniciativa |
| `period` | Texto libre: `"Junio"`, `"Agosto – Septiembre"`, etc. |
| `desc` | (opcional) descripción corta |

También actualiza la constante `LAST_UPDATED` al inicio del archivo con la fecha del día.

No necesitas modificar `index.html`: la página lee `data.js` automáticamente, arma los contadores, el buscador y los filtros por pilar solos.

## Cómo publicarlo en GitHub Pages

1. Sube estos tres archivos a la raíz de tu repositorio (o a una carpeta, ej. `/docs`).
2. En el repositorio: **Settings → Pages → Source**, selecciona la rama y carpeta donde están los archivos.
3. GitHub te dará una URL del tipo `https://tu-usuario.github.io/tu-repo/`.
4. Cada vez que hagas commit a `data.js`, la página se actualiza sola (puede tardar 1–2 minutos en propagarse).

## Ver los cambios en local antes de subir

No necesitas servidor: solo abre `index.html` en el navegador haciendo doble clic.

---

Última actualización: 19 de agosto de 2026
