# Métricas de calidad (ISO 9126)

Responsable de consolidar: Analista de Calidad (QA).
Cada rol mide sus indicadores: Backend (fiabilidad, eficiencia, mantenibilidad), Frontend (usabilidad,
portabilidad en Windows) y QA (funcionalidad, defectos).

Niveles: **3** cumple la meta · **2** a menos de 15 % de la meta, sin afectar el uso · **1** a 15 % o más, o afecta el uso.
Se mide al cierre de cada ciclo; la columna del ciclo 2 la completa el equipo.

| Característica | Indicador | Fórmula | Meta | Ciclo 1 (13 oct) | Nivel | Ciclo 2 | Nivel |
|---|---|---|---|---|---|---|---|
| Funcionalidad | Completitud de reglas | Reglas implementadas / especificadas | 100 % | 5/5 = 100 % | 3 | | |
| Funcionalidad | Exactitud del cálculo | Casos con total exacto / casos de cálculo | 100 % | 51/51 = 100 % | 3 | | |
| Funcionalidad | Validación en servidor | Campos validados en backend / campos | 100 % | 4/4 = 100 % | 3 | | |
| Fiabilidad | Densidad de defectos | Defectos encontrados / KLOC | ≤ 10 | 6 / 0.789 = 7.6 | 3 | | |
| Fiabilidad | Eficacia de corrección | Defectos cerrados / encontrados | 100 % al cierre | 3/6 = 50 % | 1 | | |
| Fiabilidad | Robustez aleatoria | Peticiones aleatorias sin 500 / enviadas | 100 % | 1000/1000 = 100 % | 3 | | |
| Fiabilidad | Robustez ante extremos | Entradas extremas sin 500 / probadas | 100 % | 1/5 = 20 % (DEF-004) | 1 | | |
| Usabilidad | Campos con ayuda | Campos con ayuda / campos | 100 % | 4/4 = 100 % | 3 | | |
| Usabilidad | Errores que orientan | Mensajes que dicen cómo corregir / mensajes | 100 % | 6/8 = 75 % (DEF-005, DEF-006) | 1 | | |
| Usabilidad | Diseño adaptable | Anchos sin desplazamiento / probados | 100 % | 2/2 = 100 % | 3 | | |
| Eficiencia | Tiempo de respuesta p95 | Percentil 95 de 1,000 peticiones | ≤ 500 ms | 2.2 ms | 3 | | |
| Mantenibilidad | Complejidad máxima | Mayor V(G) | ≤ 10 | 7 | 3 | | |
| Mantenibilidad | Centralización de reglas | Valores de negocio en `reglas.py` / total | 100 % | 14/14 = 100 % | 3 | | |
| Mantenibilidad | Cobertura de ramas | Ramas ejecutadas / totales | ≥ 85 % | 27/28 = 96 % | 3 | | |
| Mantenibilidad | Reglas con prueba | Reglas con prueba automatizada / reglas | 100 % | 5/5 = 100 % | 3 | | |
| Portabilidad | Sistemas operativos | Sistemas donde la suite pasa / objetivo | 2 de 2 | Linux sí; Windows pendiente | — | | |

## Cómo se mide cada indicador

| Indicador | Comando o procedimiento |
|---|---|
| Exactitud, reglas con prueba | `pytest -m "caja_negra or caja_blanca"` |
| Cobertura | `pytest` (resumen al final y `reports/coverage-html/index.html`) |
| Complejidad | `radon cc app -s -a` |
| Robustez aleatoria, tiempo de respuesta | `python scripts/medir_robustez.py` con el servidor encendido |
| Robustez ante extremos | Pruebas `test_DEF004_*` y sesiones exploratorias |
| Densidad de defectos | Defectos en `docs/qa/defectos/` ÷ (líneas de código sin comentarios ni vacías ÷ 1000) |
| Errores que orientan | Revisión de los 8 mensajes de `docs/frontend/especificacion-interfaz.md` (4 de validación, 2 de rechazo, sin conexión, error del servidor) |
| Sistemas operativos | `scripts/ejecutar-todo.ps1` en Windows y `scripts/ejecutar-todo.sh` en Linux |

## Lectura del ciclo 1

Tres indicadores en nivel 1, los tres por defectos abiertos: DEF-004 explica la robustez ante extremos,
DEF-005 y DEF-006 los mensajes que no orientan, y los tres juntos la eficacia de corrección.
Al cerrarlos en el ciclo 2, los tres indicadores deberían pasar a nivel 3.
