# Catálogo de casos de prueba

Responsable: Analista de Calidad (QA)

Cada identificador coincide con el nombre del caso en el código (`pytest -k <ID>` ejecuta uno solo).
Los valores de entrada y resultados esperados de caja negra y caja blanca están en el informe técnico, secciones 5 y 6.

| Grupo | IDs | Casos | Técnica | Archivo |
|---|---|---|---|---|
| Peso: particiones | CE1–CE6 | 6 | Particiones de equivalencia | `tests/unit/test_caja_negra_peso.py` |
| Peso: valores límite | BVA-01–BVA-10 | 10 | Valores límite | `tests/unit/test_caja_negra_peso.py` |
| Monto: particiones | CE-M1–CE-M6 | 6 | Particiones de equivalencia | `tests/unit/test_caja_negra_monto.py` |
| Monto: valores límite | BVA-M01–BVA-M10 | 10 | Valores límite | `tests/unit/test_caja_negra_monto.py` |
| Cliente × envío | R1–R6 | 6 | Tabla de decisión | `tests/unit/test_tabla_decision.py` |
| Caminos de `calcular_tarifa` | C1–C6 | 6 | Caminos independientes | `tests/unit/test_caja_blanca.py` |
| Caminos de `validar_cotizacion` | V1–V7 | 7 | Caminos independientes | `tests/unit/test_caja_blanca.py` |
| Robustez | — | 223 | Entradas atípicas y propiedad del desglose | `tests/unit/test_robustez.py` |
| API | — | 16 | Contrato HTTP | `tests/api/test_api.py` |
| Interfaz | UI-01–UI-09 | 9 | E2E | `tests/e2e/test_interfaz.py` |
| Reproducción de defectos abiertos | DEF-004, DEF-005, DEF-006 | 7 | `xfail(strict=True)` | `tests/api/test_api.py`, `tests/e2e/test_interfaz.py` |

## Casos de interfaz

| ID | Entrada | Resultado esperado |
|---|---|---|
| UI-01 | Peso vacío | "Ingresa el peso." y guía vacía |
| UI-02 | Peso "abc" | "Escribe solo números, por ejemplo 2.5." |
| UI-03 | Peso "2,555" | "Usa máximo 2 decimales." |
| UI-04 | 4,5 kg, $80, VIP, ESTANDAR | Total $11.20 |
| UI-05 | 21 kg | Sello "Rechazado" y mención de 20 kg |
| UI-06 | 10 kg, $250, FRECUENTE, EXPRESS | Total $55.63, cinta Express, seguro +$5.00 |
| UI-07 | Error de formato después de una cotización | La guía anterior se retira (regresión DEF-002) |
| UI-08 | Pantalla de 390 px | Sin desplazamiento horizontal |
| UI-09 | Monto $1,500 | Sello "Rechazado" y mención de $1,000 |
