# Matriz de trazabilidad

Responsable: Analista de Calidad (QA). Se actualiza cuando cambia una regla, un caso o un defecto.

## Requisitos → pruebas

| Requisito | Caja negra | Caja blanca | API e interfaz | Estado |
|---|---|---|---|---|
| BR-01 Tarifa base | BVA-02 a BVA-09 | C1 | Propiedad del desglose (210 combinaciones) | Aprobado |
| BR-02 Peso y límite 20 kg | CE1–CE6, BVA-01–BVA-10 | C1, C2, V2–V4 | API: 3 casos; UI-01–UI-05 | Aprobado; DEF-004 abierto (valores enormes) |
| BR-03 Descuento | R1–R6 | C3, C4 | Cliente desconocido rechazado | Aprobado |
| BR-04 Recargo EXPRESS | R1–R6 | C5 | API: cotización completa; UI-06 | Aprobado |
| BR-05 Seguro | CE-M1–CE-M6, BVA-M01–BVA-M10 | C6, V5–V7 | API: 2 casos; UI-09 | Aprobado; DEF-004 abierto (valores enormes) |
| Redondeo al centavo | R4, BVA-M06, BVA-M08 | — | Propiedad del desglose | Aprobado |
| Entradas no numéricas | CE5, CE-M5 | V1 | Robustez: 7 casos; API: 5 casos; UI-02 | Aprobado |
| Errores con código | — | — | API: códigos y 405 | Aprobado; DEF-005 abierto (interfaz) |
| Mensajes que orientan | — | — | UI-01–UI-03 | DEF-006 abierto |

## Defectos → requisitos → pruebas

| Defecto | Requisito afectado | Prueba que lo reproduce o protege | Estado |
|---|---|---|---|
| DEF-001 | Errores con código | `test_frontend_servido_sin_ocultar_la_api` | Cerrado |
| DEF-002 | Mensajes que orientan | `test_UI07_regresion_DEF002_guia_se_retira` | Cerrado |
| DEF-003 | Interfaz | Revisión visual | Cerrado |
| DEF-004 | BR-02, BR-05 | `test_DEF004_numeros_enormes_se_rechazan_sin_error_500` | Abierto |
| DEF-005 | Errores con código | `test_DEF005_error_del_servidor_no_se_presenta_como_falta_de_conexion` | Abierto |
| DEF-006 | Mensajes que orientan | `test_DEF006_separador_de_miles_tiene_mensaje_claro` | Abierto |
