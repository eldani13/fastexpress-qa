# Plan de aseguramiento de calidad

Responsable: Analista de Calidad (QA), con aportes de cada rol en sus métricas

## 1. Objetivos de calidad

| Objetivo | Meta | Cómo se verifica |
|---|---|---|
| Cálculo exacto | 100 % de casos de cálculo correctos al centavo | Suite de caja negra y caja blanca |
| Cobertura | Líneas y ramas ≥ 85 % | `pytest` falla por debajo del umbral |
| Complejidad controlada | V(G) ≤ 10 por función | `radon cc` en integración continua |
| Sin errores no controlados | 0 respuestas 500 | Robustez, sesiones exploratorias |
| Defectos bajo control | 0 críticos o altos abiertos en la entrega | Tablero de issues |
| Trazabilidad completa | 100 % de reglas con prueba | `docs/calidad/trazabilidad.md` |

## 2. Estándares aplicados

| Área | Estándar |
|---|---|
| Calidad del producto | ISO/IEC 9126 (características y subcaracterísticas) |
| Documentación de pruebas | Estructura IEEE 829 para el plan de pruebas |
| Complejidad | Métrica de McCabe, umbral 10 |
| Código Python | PEP 8 |
| Commits | `tipo(área): descripción` con referencia al defecto o issue |
| Decisiones técnicas | Registro ADR (`docs/backend/decisiones-tecnicas.md`) |

## 3. Puertas de calidad

Un cambio solo entra a `main` si pasa todas:

1. GitHub Actions: pruebas aprobadas y cobertura ≥ 85 %.
2. Revisión aprobada por otro rol (desarrollo revisado por QA).
3. Definición de Terminado cumplida (`CONTRIBUTING.md`).

Configuración en GitHub: *Settings → Branches → Add rule* para `main`, con "Require a pull request before merging",
"Require approvals: 1" y "Require status checks to pass" (seleccionar `pruebas`).

## 4. Gestión de defectos

Proceso en `docs/proceso/ciclo-de-vida-defectos.md`. QA propone la severidad, el equipo la confirma en la reunión
de seguimiento, y cada defecto se asigna al desarrollador de su área. QA reporta el estado en cada reunión.

## 5. Métricas y frecuencia

| Métrica | Frecuencia | Fuente |
|---|---|---|
| Indicadores ISO 9126 | Al cierre de cada ciclo de pruebas | `docs/calidad/metricas.md` |
| Defectos por estado y severidad | Cada reunión | Issues de GitHub |
| Cobertura y complejidad | Cada pull request | GitHub Actions |

## 6. Reuniones

Seguimiento dos veces por semana, con acta en `docs/proceso/actas/`. Orden del día: avance por rol,
estado de defectos, decisiones, compromisos.

## 7. Riesgos de calidad

| Riesgo | Probabilidad | Impacto | Respuesta |
|---|---|---|---|
| Cambios sin pruebas | Media | Alto | Puerta de cobertura en CI y revisión obligatoria |
| Documentación desactualizada | Alta | Medio | Casilla en la plantilla de PR; revisión en cada reunión |
| Defectos encontrados tarde | Media | Alto | Matriz de caja negra antes del código; sesiones exploratorias por ciclo |
