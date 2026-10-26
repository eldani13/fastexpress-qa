# 5. Plan de pruebas de caja negra

**Requisito del enunciado:** particiones de equivalencia y BVA para `Peso` y `Monto`, y
tabla de decisión `Tipo de Cliente` × `Tipo de Envío`.

Los 38 casos de caja negra se diseñaron desde la especificación (sin mirar el código) y los
38 se aprobaron en el ciclo 1. Cada identificador coincide con el nombre del caso en PyTest
(`pytest -k CE2`, `pytest -k BVA-05`, etc.).

Valores neutros al aislar un campo:

- Al probar **peso**: cliente `NUEVO`, envío `ESTANDAR`, monto `$50.00`.
- Al probar **monto**: peso `1 kg`, `NUEVO`, `ESTANDAR` (subtotal `$7.00`).

## 5.1 Particiones de equivalencia: Peso (BR-02)

| ID | Clase | Tipo | Entrada | Resultado esperado | Estado |
|---|---|---|---|---|---|
| CE1 | Peso ? 0 | Inválida | ?1 | Error `PESO_INVALIDO` | Aprobado |
| CE2 | 0.01 – 5.00 kg | Válida | 3 | Total $11.00 ($2/kg) | Aprobado |
| CE3 | 5.01 – 20.00 kg | Válida | 12 | Total $53.00 ($4/kg) | Aprobado |
| CE4 | Mayor a 20.00 kg | Inválida | 25 | Rechazo `LIMITE_PESO_EXCEDIDO` | Aprobado |
| CE5 | No numérico | Inválida | `"abc"` | Error `PESO_INVALIDO` | Aprobado |
| CE6 | Más de 2 decimales | Inválida | 5.005 | Error `PESO_INVALIDO` | Aprobado |

**Archivo:** `tests/unit/test_caja_negra_peso.py`

## 5.2 Valores límite: Peso (BR-02)

| ID | Límite analizado | Entrada (kg) | Tarifa | Resultado esperado | Estado |
|---|---|---|---|---|---|
| BVA-01 | Mínimo ? 0.01 | 0.00 | — | Error `PESO_INVALIDO` | Aprobado |
| BVA-02 | Mínimo | 0.01 | $2/kg | $5.02 | Aprobado |
| BVA-03 | Mínimo + 0.01 | 0.02 | $2/kg | $5.04 | Aprobado |
| BVA-04 | Fin de tramo 1 ? 0.01 | 4.99 | $2/kg | $14.98 | Aprobado |
| BVA-05 | Fin de tramo 1 | 5.00 | $2/kg | $15.00 | Aprobado |
| BVA-06 | Inicio de tramo 2 | 5.01 | $4/kg | $25.04 | Aprobado |
| BVA-07 | Inicio de tramo 2 + 0.01 | 5.02 | $4/kg | $25.08 | Aprobado |
| BVA-08 | Máximo ? 0.01 | 19.99 | $4/kg | $84.96 | Aprobado |
| BVA-09 | Máximo | 20.00 | $4/kg | $85.00 | Aprobado |
| BVA-10 | Máximo + 0.01 | 20.01 | — | Rechazo `LIMITE_PESO_EXCEDIDO` | Aprobado |

Entre BVA-05 y BVA-06 el total salta de $15.00 a $25.04 por 0.01 kg: es el comportamiento
de BR-02 (punto de mayor riesgo: usar `<` en vez de `<=`).

## 5.3 Particiones de equivalencia: Monto declarado (BR-05)

| ID | Clase | Tipo | Entrada | Resultado esperado | Estado |
|---|---|---|---|---|---|
| CE-M1 | Monto ? 0 | Inválida | ?10 | Error `MONTO_INVALIDO` | Aprobado |
| CE-M2 | 0.01 – 100.00 | Válida | 50 | Seguro $0.00, total $7.00 | Aprobado |
| CE-M3 | 100.01 – 1,000.00 | Válida | 500 | Seguro $10.00, total $17.00 | Aprobado |
| CE-M4 | Mayor a 1,000.00 | Inválida | 1,500 | Rechazo `LIMITE_MONTO_EXCEDIDO` | Aprobado |
| CE-M5 | No numérico | Inválida | `"abc"` | Error `MONTO_INVALIDO` | Aprobado |
| CE-M6 | Más de 2 decimales | Inválida | 50.005 | Error `MONTO_INVALIDO` | Aprobado |

**Archivo:** `tests/unit/test_caja_negra_monto.py`

## 5.4 Valores límite: Monto declarado (BR-05)

| ID | Límite analizado | Entrada ($) | Seguro | Total esperado | Estado |
|---|---|---|---|---|---|
| BVA-M01 | Mínimo ? 0.01 | 0.00 | — | Error `MONTO_INVALIDO` | Aprobado |
| BVA-M02 | Mínimo | 0.01 | $0.00 | $7.00 | Aprobado |
| BVA-M03 | Mínimo + 0.01 | 0.02 | $0.00 | $7.00 | Aprobado |
| BVA-M04 | Umbral de seguro ? 0.01 | 99.99 | $0.00 | $7.00 | Aprobado |
| BVA-M05 | Umbral de seguro | 100.00 | $0.00 | $7.00 | Aprobado |
| BVA-M06 | Umbral de seguro + 0.01 | 100.01 | $2.00 | $9.00 | Aprobado |
| BVA-M07 | Umbral de seguro + 0.02 | 100.02 | $2.00 | $9.00 | Aprobado |
| BVA-M08 | Máximo ? 0.01 | 999.99 | $20.00 | $27.00 | Aprobado |
| BVA-M09 | Máximo | 1,000.00 | $20.00 | $27.00 | Aprobado |
| BVA-M10 | Máximo + 0.01 | 1,000.01 | — | Rechazo `LIMITE_MONTO_EXCEDIDO` | Aprobado |

El seguro de BVA-M06 es \(100.01 \times 0.02 = 2.0002\), redondeado a $2.00.

## 5.5 Tabla de decisión: Tipo de cliente × Tipo de envío (BR-03, BR-04)

Condiciones fijas: peso **10 kg** (subtotal $45.00) y monto **$50.00** (sin seguro).
Dos condiciones (3 × 2) generan **6 reglas**.

| Condición / acción | R1 | R2 | R3 | R4 | R5 | R6 |
|---|---|---|---|---|---|---|
| Tipo de cliente | NUEVO | NUEVO | FRECUENTE | FRECUENTE | VIP | VIP |
| Tipo de envío | ESTANDAR | EXPRESS | ESTANDAR | EXPRESS | ESTANDAR | EXPRESS |
| Descuento | 0 % ($0.00) | 0 % ($0.00) | 10 % ($4.50) | 10 % ($4.50) | 20 % ($9.00) | 20 % ($9.00) |
| Recargo | 0 % | 25 % ($11.25) | 0 % | 25 % ($10.13) | 0 % | 25 % ($9.00) |
| **Total esperado** | **$45.00** | **$56.25** | **$40.50** | **$50.63** | **$36.00** | **$45.00** |
| Estado | Aprobado | Aprobado | Aprobado | Aprobado | Aprobado | Aprobado |

**R4** es el caso crítico de redondeo: \(40.50 \times 0.25 = 10.125\). Con `Decimal` y
`ROUND_HALF_UP` da **$10.13**; con `float`/`round()` de Python puede dar $10.12.

**Archivo:** `tests/unit/test_tabla_decision.py`

## 5.6 Validaciones de la interfaz (complemento)

El frontend valida formato; casos E2E en `tests/e2e/test_interfaz.py`.

| ID | Entrada | Resultado esperado | Estado (ciclo 1) |
|---|---|---|---|
| UI-01 | Peso vacío | "Ingresa el peso."; no se llama a la API | Aprobado |
| UI-02 | Peso `"abc"` | "Escribe solo números, por ejemplo 2.5." | Aprobado |
| UI-03 | Peso `"2,555"` | "Usa máximo 2 decimales." | Aprobado |
| UI-04 | `"4,5"` kg, VIP, ESTANDAR | Total $11.20 | Aprobado |
| UI-05 | 21 kg | Guía con sello "Rechazado" | Aprobado |
| UI-06 | 10 kg, $250, FRECUENTE, EXPRESS | Total $55.63, cinta Express | Aprobado |
| UI-07 | Error de formato tras cotización válida | La guía anterior se retira | Aprobado (tras DEF-002) |
| UI-08 | Vista 390 px | Sin desplazamiento horizontal | Aprobado |
| UI-09 | Monto $1,500 | Sello "Rechazado", mención $1,000 | Aprobado |
