# Plan de pruebas

Responsable: Analista de Calidad (QA) · Estructura basada en IEEE 829

## 1. Identificador

PP-FASTEXPRESS-01, versión 1.1 (2026-10-13). Cambios: se agregan pruebas E2E y el ciclo 2.

## 2. Objeto de prueba

Módulo de Cotización de Envíos y Descuentos FastExpress: core de negocio (`backend/app/core/`),
API REST (`backend/app/main.py`) e interfaz web (`frontend/`).

## 3. Funcionalidades a probar

| Funcionalidad | Reglas | Técnicas |
|---|---|---|
| Cálculo por peso y límite | BR-01, BR-02 | Particiones de equivalencia, valores límite, caminos |
| Descuento y recargo | BR-03, BR-04 | Tabla de decisión, caminos |
| Seguro por valor declarado | BR-05 | Particiones, valores límite, caminos |
| Validación de entradas | Contrato de la API | Robustez, valores extremos |
| Interfaz | Especificación de interfaz | E2E automatizado, exploratorio |

**No se prueba:** carga concurrente, seguridad (autenticación, inyección), navegadores distintos de Chromium.

## 4. Enfoque

1. **Caja negra** desde la especificación, antes del código (matriz en el informe, sección 5).
2. **Caja blanca** sobre `calcular_tarifa` y `validar_cotizacion`: un caso por camino independiente.
3. **Robustez:** entradas atípicas, propiedad del desglose en 210 combinaciones y 1,000 peticiones aleatorias.
4. **API:** contrato HTTP con TestClient.
5. **E2E:** Playwright sobre la aplicación real.
6. **Exploratorio:** sesiones con objetivo definido (`sesiones-exploratorias.md`).
7. **Regresión:** toda la suite en cada pull request (GitHub Actions).

## 5. Criterios

| Criterio | Condición |
|---|---|
| Entrada a un ciclo | El código compila, `/health` responde 200, la versión a probar está en `main` |
| Aprobación de un caso | El resultado obtenido coincide exactamente con el esperado (al centavo) |
| Salida de un ciclo | 100 % de casos ejecutados; 0 defectos críticos o altos abiertos; cobertura de líneas y ramas ≥ 85 % |
| Suspensión | `/health` falla o más del 20 % de casos fallan por la misma causa |

## 6. Entregables de QA

| Entregable | Ubicación |
|---|---|
| Este plan | `docs/qa/plan-de-pruebas.md` |
| Catálogo de casos | `docs/qa/casos-de-prueba.md` |
| Pruebas automatizadas | `backend/tests/` |
| Reportes de defectos | Issues de GitHub + `docs/qa/defectos/` |
| Reportes de ejecución por ciclo | `docs/qa/reportes/` |
| Sesiones exploratorias | `docs/qa/sesiones-exploratorias.md` |

## 7. Entorno

| Elemento | Versión mínima |
|---|---|
| Python | 3.12 |
| Navegador para E2E | Chromium de Playwright |
| Sistemas operativos objetivo | Windows 10/11 y Linux |

## 8. Calendario

| Ciclo | Fechas | Alcance |
|---|---|---|
| 1 | 12–13 oct | Ejecución completa inicial; sesión exploratoria 1 |
| 2 | 14–20 oct | Verificación de DEF-004 a DEF-006, ejecución en Windows, nuevas sesiones exploratorias |
| Cierre | 21–26 oct | Regresión final y reporte de cierre |

## 9. Riesgos

| Riesgo | Mitigación |
|---|---|
| Ambigüedades del enunciado | Supuestos documentados (informe, sección 3.3) |
| Diferencias entre Windows y Linux | Ciclo 2 en Windows |
| Pruebas E2E inestables por tiempos | Esperas explícitas a elementos, nunca pausas fijas |
