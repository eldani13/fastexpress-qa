# Reporte de ejecución: ciclo 1

Responsable: Analista de Calidad (QA)

**Resultado:** ciclo cerrado con 299 pruebas aprobadas, 0 fallidas y 7 pruebas de reproducción de
3 defectos abiertos (DEF-004 a DEF-006). No se cumple el criterio de salida "0 defectos altos abiertos"
por DEF-004; pasan al ciclo 2.

| Campo | Detalle |
|---|---|
| Fecha | 2026-10-13 |
| Versión probada | `main` del 2026-10-12 (antes de crear el repositorio en GitHub) |
| Entorno | Linux, Python 3.13.16, Chromium de Playwright 1.56, dependencias de `requirements-e2e.txt` |
| Comando | `bash scripts/ejecutar-todo.sh` sobre un entorno virtual nuevo |
| Registro completo | [ejecucion-ciclo-1.txt](ejecucion-ciclo-1.txt) |

## Resultados

| Suite | Aprobadas | Fallidas | Defectos abiertos reproducidos (xfail) | Tiempo |
|---|---|---|---|---|
| Unitarias y API (`pytest`) | 290 | 0 | 3 (DEF-004) | 1.1 s |
| E2E de interfaz (`pytest -m e2e`) | 9 | 0 | 4 (DEF-005: 1, DEF-006: 3) | 7.9 s |
| **Total** | **299** | **0** | **7** | |

| Medición | Valor | Meta |
|---|---|---|
| Cobertura de líneas | 179/179 = 100 % | ≥ 85 % |
| Cobertura de ramas | 27/28 = 96 % | ≥ 85 % |
| Complejidad máxima / promedio | 7 / 1.82 | ≤ 10 |
| Peticiones aleatorias con error 500 | 0 de 1,000 | 0 |
| Tiempo de respuesta p95 | 2.1 ms | ≤ 500 ms |

## Defectos

| ID | Estado al cierre del ciclo | Severidad | Área |
|---|---|---|---|
| DEF-001 | Cerrado | Media | Backend |
| DEF-002 | Cerrado | Alta | Frontend |
| DEF-003 | Cerrado | Baja | Frontend |
| DEF-004 | Nuevo | Alta | Backend |
| DEF-005 | Nuevo | Media | Frontend |
| DEF-006 | Nuevo | Media | Frontend |

## Observaciones del ciclo

1. **Dependencias sin versión fija.** La primera ejecución sobre un entorno limpio instaló versiones más nuevas (Starlette 1.8, Playwright 1.63) y apareció una advertencia de obsolescencia. Se fijaron las versiones (ADR-007) y se agregó `httpx2`; la ejecución final no tiene advertencias.
2. **Las pruebas `xfail` podían ocultar fallos del entorno.** Sin navegador disponible, las pruebas de defectos aparecían como "xfailed" aunque nunca llegaron a ejecutarse. Ahora usan `raises=AssertionError`: solo un fallo de verificación cuenta como esperado; cualquier otro error se reporta como error.
3. **Pendiente para el ciclo 2:** repetir la ejecución en Windows con `scripts\ejecutar-todo.ps1`.
