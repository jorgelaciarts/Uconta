/*
  ================================================================
  DATOS DEL ÍNDICE
  ================================================================
  Para agregar una nueva entrada, copia un bloque { ... } dentro
  del arreglo RECORDS y completa los campos:

    exp:    código de expediente, ej. "EXP-2026-013" (usa el
            siguiente número disponible)
    pillar: uno de "mantenciones" | "experiencia" | "revision"
            | "riesgos" | "otros"
    title:  nombre de la iniciativa
    period: texto libre, ej. "Junio" o "Agosto – Septiembre"
    desc:   (opcional) una frase de contexto

  No es necesario tocar index.html: la página lee este archivo
  automáticamente y se actualiza sola.
  ================================================================
*/

const LAST_UPDATED = "19 de agosto de 2026";

const RECORDS = [
  // --- Mantenciones ---
  { exp: "EXP-2026-001", pillar: "mantenciones", title: "Base de datos", period: "Junio – Agosto" },
  { exp: "EXP-2026-002", pillar: "mantenciones", title: "Formato preinforme PT", period: "Septiembre – Octubre" },
  { exp: "EXP-2026-003", pillar: "mantenciones", title: "Sistema Rendición Online", period: "Junio – Diciembre" },

  // --- Experiencia Usuario ---
  { exp: "EXP-2026-004", pillar: "experiencia", title: "Manuales contabilidad", period: "Agosto – Diciembre" },
  { exp: "EXP-2026-005", pillar: "experiencia", title: "Cápsulas contables", period: "Septiembre – Octubre" },
  { exp: "EXP-2026-006", pillar: "experiencia", title: "Malla curricular Servel AE", period: "Agosto – Octubre" },

  // --- Revisión Cuentas ---
  { exp: "EXP-2026-007", pillar: "revision", title: "Catálogo de hallazgos", period: "Junio" },
  { exp: "EXP-2026-008", pillar: "revision", title: "Criterios reembolso", period: "Julio" },
  { exp: "EXP-2026-009", pillar: "revision", title: "Plan de Auditoría", period: "Agosto – Septiembre" },
  { exp: "EXP-2026-010", pillar: "revision", title: "Materialidad", period: "Septiembre" },
  { exp: "EXP-2026-011", pillar: "revision", title: "Nuevos convenios", period: "Septiembre" },

  // --- Matriz Riesgos ---
  { exp: "EXP-2026-012", pillar: "riesgos", title: "Monitoreo Automático", period: "Julio – Agosto" },
  { exp: "EXP-2026-013", pillar: "riesgos", title: "Análisis de riesgos", period: "Julio" },

  // --- Otros ---
  { exp: "EXP-2026-014", pillar: "otros", title: "Generación de informes", period: "Junio – …" },

  // --- Agrega nuevas entradas debajo de esta línea ---
];
