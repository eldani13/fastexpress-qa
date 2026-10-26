# 9. Evaluación del producto según ISO 9126

Responsable de consolidar: QA. Backend aporta fiabilidad/eficiencia/mantenibilidad;
Frontend usabilidad/portabilidad; QA funcionalidad y defectos.

Niveles: **3** cumple la meta · **2** cerca · **1** no cumple o afecta el uso.

## 9.1 Indicadores (ciclo 1 y avances ciclo 2)

| Característica | Indicador | Meta | Ciclo 1 | Nivel C1 | Ciclo 2 (parcial) | Nivel C2 |
|---|---|---|---|---|---|---|
| Funcionalidad | Completitud de reglas | 100 % | 5/5 | 3 | 5/5 | 3 |
| Funcionalidad | Exactitud del cálculo | 100 % | 51/51 | 3 | (misma suite) | 3 |
| Funcionalidad | Validación en servidor | 100 % | 4/4 | 3 | 4/4 | 3 |
| Fiabilidad | Densidad de defectos | ? 10 / KLOC | 7.6 | 3 | pendiente consolidar | — |
| Fiabilidad | Eficacia de corrección | 100 % al cierre | 3/6 = 50 % | 1 | 4/6 tras DEF-004* | 2* |
| Fiabilidad | Robustez aleatoria | 100 % | 1000/1000 | 3 | 1000/1000 | 3 |
| Fiabilidad | Robustez extremos | 100 % | 1/5 = 20 % | 1 | **5/5 = 100 %** | **3** |
| Usabilidad | Campos con ayuda | 100 % | 4/4 | 3 | — | — |
| Usabilidad | Errores que orientan | 100 % | 6/8 = 75 % | 1 | pendiente DEF-005/006 | — |
| Usabilidad | Diseño adaptable | 100 % | 2/2 | 3 | — | — |
| Eficiencia | Tiempo p95 | ? 500 ms | 2.1 ms | 3 | 1.24 ms | 3 |
| Mantenibilidad | Complejidad máx. | ? 10 | 7 | 3 | 7 | 3 |
| Mantenibilidad | Centralización reglas | 100 % | 14/14 | 3 | 14/14 | 3 |
| Mantenibilidad | Cobertura de ramas | ? 85 % | 96 % | 3 | 96.7 % | 3 |
| Mantenibilidad | Reglas con prueba | 100 % | 5/5 | 3 | 5/5 | 3 |
| Portabilidad | SO verificados | 2 de 2 | Linux sí; Win. pendiente | — | Backend midió en Windows | — |

\* Eficacia 4/6 ? 67 % tras cerrar DEF-004; sube a 100 % cuando se cierren DEF-005 y DEF-006.

Detalle backend ciclo 2: repo API `docs/backend/metricas-ciclo-2.md`.  
Tabla viva del equipo: `docs/calidad/metricas.md`.

## 9.2 Cómo se mide

| Indicador | Procedimiento |
|---|---|
| Exactitud / caminos | `pytest -m "caja_negra or caja_blanca"` |
| Cobertura | `pytest` + HTML en `reports/coverage-html/` |
| Complejidad | `radon cc app -s -a` |
| Robustez / tiempo | `python scripts/medir_robustez.py` (API encendida) |
| Extremos | Casos DEF-004 + sesión exploratoria |
