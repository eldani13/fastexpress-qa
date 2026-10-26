# 3. Especificación y supuestos

## 3.1 Reglas de negocio

| Regla | Descripción | Origen |
|---|---|---|
| BR-01 | Tarifa base $5.00 USD por orden | Enunciado |
| BR-02 | 0.01–5.00 kg: $2.00/kg; 5.01–20.00 kg: $4.00/kg; > 20.00 kg: rechazo | Enunciado |
| BR-03 | NUEVO 0 %; FRECUENTE 10 %; VIP 20 % | Enunciado |
| BR-04 | ESTANDAR 0 %; EXPRESS +25 % sobre el subtotal con descuento | Enunciado |
| BR-05 | Monto declarado 0.01–100.00: sin seguro; 100.01–1,000.00: seguro 2 %; > 1,000.00: rechazo | Propuesta del equipo |

Sobre *Monto*, el docente indicó que no estaba estipulado y que el equipo podía proponerlo.
Se definió como el **valor declarado** del contenido.

## 3.2 Fórmula de cálculo

\[
\text{Total} = (5 + P \cdot T_{kg}) \cdot (1 - d) \cdot (1 + r) + S
\]

En la implementación se calcula por componentes con `Decimal` y redondeo `ROUND_HALF_UP`
al centavo, de modo que el desglose suma exactamente el total:

1. `cargo_peso = redondear(P × T_kg)`
2. `subtotal = 5 + cargo_peso`
3. `descuento = redondear(subtotal × d)`
4. `recargo = redondear((subtotal ? descuento) × r)`
5. `seguro = redondear(monto × 0.02)` si aplica
6. `total = subtotal ? descuento + recargo + seguro`

## 3.3 Ambigüedades y decisiones

| Ambigüedad | Decisión del equipo | Efecto si se hubiera elegido otra |
|---|---|---|
| Campo Monto no definido | Valor declarado + BR-05 | Sin regla propia de entrada |
| Orden descuento/recargo | Recargo sobre subtotal ya descontado | 10 kg VIP EXPRESS: $45.00 vs $47.25 |
| Cobro del peso | Todo el peso a la tarifa de su rango | Escalonado cambiaría totales |
| Rangos con 2 decimales | 5.005 kg no pertenece a ningún tramo ? rechazo | — |
