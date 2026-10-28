# 7. Resultados de ejecución y reporte de cobertura

**Requisito del enunciado:** captura y análisis de cobertura; mínimo **85 %** de líneas y ramas.

## 7.1 Resultados por tipo de prueba — Ciclo 1 (13 oct 2026)

Ejecución: entorno virtual nuevo, Linux, Python 3.13. Registro completo:
`docs/qa/reportes/ejecucion-ciclo-1.txt`. Análisis: `docs/qa/reportes/ciclo-1.md`.

| Tipo | Archivo | Casos | Aprobados | Fallidos | Reproducen defectos abiertos |
|---|---|---|---|---|---|
| Caja negra | `test_caja_negra_*.py`, `test_tabla_decision.py` | 38 | 38 | 0 | — |
| Caja blanca | `test_caja_blanca.py` | 13 | 13 | 0 | — |
| Robustez | `test_robustez.py` | 223 | 223 | 0 | — |
| API | `test_api.py` | 19 | 16 | 0 | 3 (DEF-004) |
| E2E | `tests/e2e/test_interfaz.py` | 13 | 9 | 0 | 4 (DEF-005, DEF-006) |
| **Total** | | **306** | **299** | **0** | **7** |

Las pruebas de defectos abiertos usan `@pytest.mark.xfail(strict=True, raises=AssertionError)`.

## 7.2 Cobertura de código — Ciclo 1

| Módulo | Sentencias | Sin cubrir | Ramas | Ramas parciales | Cobertura |
|---|---|---|---|---|---|
| `app/core/cotizador.py` | 75 | 0 | 26 | 0 | 100 % |
| `app/core/reglas.py` | 26 | 0 | 0 | 0 | 100 % |
| `app/core/errores.py` | 13 | 0 | 0 | 0 | 100 % |
| `app/main.py` | 33 | 0 | 2 | 1 | 97 % |
| `app/schemas.py` | 28 | 0 | 0 | 0 | 100 % |
| `app/core/__init__.py` | 4 | 0 | 0 | 0 | 100 % |
| **Total** | **179** | **0** | **28** | **1** | **líneas 100 %, ramas 96 %** |

### Análisis (ciclo 1)

- **Líneas:** 179/179 = **100 %** (≥ 85 % exigido).
- **Ramas:** 27/28 = **96 %** (≥ 85 % exigido). `cotizador.py` tiene 26/26 ramas cubiertas
  (los 13 caminos de caja blanca recorren todas las decisiones).
- La única rama parcial estaba en `main.py` (montaje del frontend si existe la carpeta):
  código de despliegue, no de negocio. Se dejó visible a propósito (sin `# pragma: no cover`).
- La CI falla si la cobertura baja de 85 % (`--cov-fail-under=85`).

**Evidencia visual:** capturas en el monorepo original / informe PDF
(`cobertura-resumen.png`). Tras una nueva ejecución, adjuntar el HTML de
`backend/reports/coverage-html/index.html` o el artefacto de Actions.

## 7.3 Actualización ciclo 2 (25 oct 2026) — post DEF-004

Fuente: `fastexpress-api/docs/backend/metricas-ciclo-2.md` (medición de Backend en Windows).

| Indicador | Ciclo 1 | Ciclo 2 | Meta | ¿Cumple? |
|---|---|---|---|---|
| Cobertura de líneas | 100 % | **97.8 %** (178/182) | ≥ 85 % | Sí |
| Cobertura de ramas | 96 % | **96.7 %** (29/30) | ≥ 85 % | Sí |
| Pruebas suite principal | 290 + 3 xfail | **292** aprobadas, 0 xfail DEF-004 | — | Sí |
| Complejidad máxima | 7 | 7 | ≤ 10 | Sí |

**Nota:** la bajada de líneas 100 % → 97.8 % se debe a que, con repos separados, las líneas
que servían el frontend estático en la API ya no se ejecutan. La lógica de negocio
(`cotizador.py`) sigue en **100 %** de líneas y ramas.

## 7.4 Evidencia de pruebas de sistema

- Cotización válida (UI-06): 10 kg, $250, FRECUENTE, EXPRESS → total **$55.63**.
- Rechazo por peso (UI-05): 21 kg ? sello "Rechazado".
- DEF-004 (ciclo 2): peso de 29 nueves ? **422** `LIMITE_PESO_EXCEDIDO` (antes 500).
  Evidencias: `docs/qa/evidencias/DEF-004-*.png`.
