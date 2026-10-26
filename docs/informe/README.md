# Informe técnico de Calidad de Software — FastExpress

**Asignatura:** Calidad de Software  
**Sistema:** Módulo de Cotización de Envíos y Descuentos "FastExpress"  
**Equipo:** Backend (Julián Robles), Frontend (Cybort8), QA (Luis Daniel Cantillo Ospino)  
**Repos:** martes 27 de octubre de 2026, 8:15 p.m.

Este directorio es el **proyecto de documentación del informe** exigido por el enunciado
(*PROYECTO INTEGRADOR: Sistema de Calidad y Pruebas de Software*). Cada archivo cubre
una parte; el documento unificado para lectura/exportación es
[`INFORME-TECNICO.md`](INFORME-TECNICO.md).

## Cumplimiento del enunciado (entregable B)

| # | Requisito del profesor | Dónde está |
|---|---|---|
| 1 | Plan de caja negra: particiones y BVA de **Peso** y **Monto** | [05-caja-negra.md](05-caja-negra.md) §§5.1–5.4 |
| 1b | **Tabla de decisión** Cliente × Envío | [05-caja-negra.md](05-caja-negra.md) §5.5 |
| 2 | Diagrama **CFG** del algoritmo de cálculo | [06-caja-blanca.md](06-caja-blanca.md) (Mermaid) |
| 2b | Cálculo paso a paso de **V(G)** | [06-caja-blanca.md](06-caja-blanca.md) |
| 2c | Caminos independientes identificados y probados | [06-caja-blanca.md](06-caja-blanca.md) C1–C6, V1–V7 |
| 3 | Reporte de **cobertura** (? 85 % líneas y ramas) + análisis | [07-cobertura-resultados.md](07-cobertura-resultados.md) |

## Índice

| Archivo | Contenido |
|---|---|
| [01-portada-y-datos.md](01-portada-y-datos.md) | Datos del proyecto y roles |
| [02-introduccion-alcance.md](02-introduccion-alcance.md) | Objetivo y alcance |
| [03-especificacion.md](03-especificacion.md) | Reglas BR-01…BR-05 y supuestos |
| [04-arquitectura-estrategia.md](04-arquitectura-estrategia.md) | Arquitectura y estrategia de pruebas |
| [05-caja-negra.md](05-caja-negra.md) | **Obligatorio** — EP, BVA, decisión, UI |
| [06-caja-blanca.md](06-caja-blanca.md) | **Obligatorio** — CFG, V(G), caminos |
| [07-cobertura-resultados.md](07-cobertura-resultados.md) | **Obligatorio** — ejecución y cobertura |
| [08-defectos.md](08-defectos.md) | Gestión de DEF-001…006 |
| [09-metricas-iso.md](09-metricas-iso.md) | Evaluación ISO 9126 (ciclos 1 y 2) |
| [10-conclusiones.md](10-conclusiones.md) | Conclusiones y recomendaciones |
| [INFORME-TECNICO.md](INFORME-TECNICO.md) | Documento completo ensamblado |

## Repositorios de código

| Rol | Repositorio |
|---|---|
| API | https://github.com/eldani13/fastexpress-api |
| Frontend | https://github.com/eldani13/fastexpress-frontend |
| QA (este repo) | https://github.com/eldani13/fastexpress-qa |

## Fuentes de evidencia (sin inventar datos)

- Ejecución ciclo 1: `docs/qa/reportes/ciclo-1.md`, `ejecucion-ciclo-1.txt`
- Catálogo de casos: `docs/qa/casos-de-prueba.md`
- Plan IEEE 829: `docs/qa/plan-de-pruebas.md`
- Métricas backend ciclo 2: repo API `docs/backend/metricas-ciclo-2.md`
- Suite: `fastexpress-api/tests/`

**Regla:** las cifras de pruebas, cobertura y tiempos provienen de ejecuciones reales
documentadas. Si se vuelve a medir, actualizar este informe y `docs/calidad/metricas.md`.
