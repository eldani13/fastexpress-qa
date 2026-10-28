# 8. Gestión de defectos

El ciclo de vida (Nuevo → Asignado → En corrección → Listo para verificar → Cerrado)
está en `docs/proceso/ciclo-de-vida-defectos.md`. Los reportes detallados viven en
`docs/qa/defectos/`.

## 8.1 Resumen

| ID | Título breve | Área | Severidad | Estado al 27 oct 2026 |
|---|---|---|---|---|
| DEF-001 | API 404 en método no permitido | Backend | Media | Cerrado (código) |
| DEF-002 | Guía anterior visible tras error de validación | Frontend | Alta | Cerrado (código) |
| DEF-003 | Cinta Express tapa texto | Frontend | Baja | Cerrado (código) |
| DEF-004 | API 500 con números enormes | Backend | Alta | **Cerrado** — issue [#1](https://github.com/eldani13/fastexpress-api/issues/1), PR [#2](https://github.com/eldani13/fastexpress-api/pull/2) |
| DEF-005 | Error de servidor mostrado como falta de conexión | Frontend | Media | **Cerrado (código)** — Next.js `hooks/useCotizacion.ts` |
| DEF-006 | Separador de miles con mensaje engañoso | Frontend | Media | **Cerrado (código)** — `lib/validation/validarNumero.ts` |

## 8.2 DEF-004 (verificado en ciclo 2)

- **Esperado:** 422 `LIMITE_PESO_EXCEDIDO`.
- **Obtenido (antes):** 500 texto plano.
- **Causa raíz:** `quantize` / precisión decimal 28 dígitos.
- **Corrección:** `_tiene_mas_de_dos_decimales` con `as_tuple()`; se quitó el `xfail`.
- **Verificación QA:** Swagger + fusión del PR por CODEOWNER.

## 8.3 DEF-005 y DEF-006 (cerrados en Frontend)

- **DEF-005:** un HTTP ≥ 500 ya no se muestra como “sin conexión”. Solo el `catch` de red
  usa ese mensaje; el servidor con error muestra “Error del servidor” / código HTTP
  (`hooks/useCotizacion.ts` + `lib/api/cotizar.ts`).
- **DEF-006:** el monto con `detectarMiles: true` rechaza `1,000` / `1.000` con
  “No uses separador de miles: escribe 1000…” (`lib/validation/validarNumero.ts`).
  El peso no usa esa detección (sigue UI-03 de decimales).
