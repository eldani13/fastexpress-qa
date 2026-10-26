# Informe técnico de Calidad de Software — FastExpress

**Asignatura:** Calidad de Software  
**Sistema:** Módulo de Cotización de Envíos y Descuentos "FastExpress"  
**Equipo:** Backend (Julián Robles), Frontend (Kenneth Rojas / Cybort8), QA (Luis Daniel Cantillo Ospino)  
**Entrega:** martes 27 de octubre de 2026, 8:15 p.m.

::: tip Cómo leerlo
Desde la raíz del repo QA: `npm install` ? `npm run dev` ? http://localhost:5173  
Navega con el menú. Los grafos CFG se renderizan con Mermaid.
:::

Este directorio es el **informe** exigido por el enunciado (*PROYECTO INTEGRADOR*).
Cada archivo es una sección del sitio; el documento unificado es
[INFORME-TECNICO](./INFORME-TECNICO).

## Cumplimiento del enunciado (entregable B)

| # | Requisito del profesor | Dónde está |
|---|---|---|
| 1 | Plan de caja negra: particiones y BVA de **Peso** y **Monto** | [05-caja-negra](./05-caja-negra) |
| 1b | **Tabla de decisión** Cliente × Envío | [05-caja-negra](./05-caja-negra) §5.5 |
| 2 | Diagrama **CFG** del algoritmo de cálculo | [06-caja-blanca](./06-caja-blanca) (Mermaid) |
| 2b | Cálculo paso a paso de **V(G)** | [06-caja-blanca](./06-caja-blanca) |
| 2c | Caminos independientes identificados y probados | [06-caja-blanca](./06-caja-blanca) C1–C6, V1–V7 |
| 3 | Reporte de **cobertura** (? 85 % líneas y ramas) + análisis | [07-cobertura-resultados](./07-cobertura-resultados) |

## Índice

| Sección | Contenido |
|---|---|
| [01](./01-portada-y-datos) | Datos del proyecto y roles |
| [02](./02-introduccion-alcance) | Objetivo y alcance |
| [03](./03-especificacion) | Reglas BR-01…BR-05 y supuestos |
| [04](./04-arquitectura-estrategia) | Arquitectura y estrategia de pruebas |
| [05](./05-caja-negra) | **Obligatorio** — EP, BVA, decisión, UI |
| [06](./06-caja-blanca) | **Obligatorio** — CFG, V(G), caminos |
| [07](./07-cobertura-resultados) | **Obligatorio** — ejecución y cobertura |
| [08](./08-defectos) | Gestión de DEF-001…006 |
| [09](./09-metricas-iso) | Evaluación ISO 9126 |
| [10](./10-conclusiones) | Conclusiones y recomendaciones |
| [Completo](./INFORME-TECNICO) | Documento ensamblado |

## Repositorios de código

| Rol | Repositorio |
|---|---|
| API | https://github.com/eldani13/fastexpress-api |
| Frontend | https://github.com/eldani13/fastexpress-frontend |
| QA | https://github.com/eldani13/fastexpress-qa |

## Fuentes de evidencia

- Ejecución ciclo 1: `docs/qa/reportes/`
- Catálogo: `docs/qa/casos-de-prueba.md`
- Métricas backend ciclo 2: repo API `docs/backend/metricas-ciclo-2.md`

**Regla:** las cifras provienen de ejecuciones reales documentadas.
