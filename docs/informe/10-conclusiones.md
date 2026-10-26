# 10. Conclusiones y recomendaciones

## 10.1 Conclusiones

1. **El sistema cumple las reglas de negocio del enunciado (BR-01…BR-04)** y la BR-05
   propuesta. Los 38 casos de caja negra y los 13 de caja blanca coinciden al centavo.
2. **Se superó el umbral de cobertura del 85 %** en líneas y ramas (ciclo 1: 100 % / 96 %;
   ciclo 2: 97.8 % / 96.7 %, con lógica de negocio al 100 %).
3. **La complejidad es baja y comprobada:** V(G) = 6 y 7 en las funciones principales,
   calculada por tres métodos y confirmada con `radon`.
4. **Diseñar las pruebas antes del código** (caso R4) llevó a usar `Decimal` y evitó un
   error de redondeo de un centavo.
5. **DEF-004** (500 con números enormes) se corrigió y verificó; la robustez ante extremos
   pasó de 20 % a 100 %.
6. **Las pruebas exploratorias** encontraron defectos que la suite inicial no cubría
   (valores extremos y mensajes de UI).

## 10.2 Recomendaciones

1. Cerrar **DEF-005** y **DEF-006** en Frontend y quitar sus `xfail` en el mismo PR.
2. Completar la columna **Ciclo 2** de `docs/calidad/metricas.md` (usabilidad, densidad,
   eficacia, portabilidad Windows del front).
3. Exportar este informe a PDF para la entrega formal (partir de `INFORME-TECNICO.md`).
4. Adjuntar captura actualizada de cobertura (Actions artifact o `coverage-html`).

## 10.3 Cumplimiento explícito del enunciado

| Entregable B | Estado en este proyecto de documentación |
|---|---|
| Caja negra EP + BVA (Peso y Monto) | Cubierto — §5 |
| Tabla de decisión Cliente × Envío | Cubierto — §5.5 |
| CFG + V(G) + caminos | Cubierto — §6 |
| Cobertura ? 85 % con análisis | Cubierto — §7 |
