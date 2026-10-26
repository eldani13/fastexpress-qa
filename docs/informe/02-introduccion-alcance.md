# 2. Introducción y alcance

FastExpress cotiza el valor de un envío a partir del peso, el valor declarado, el tipo de
cliente y el tipo de envío. El sistema se validó con una suite automatizada de caja negra,
caja blanca, API y E2E, midiendo cobertura de líneas y ramas por encima del 85 % exigido.

**Objetivo.** Construir el módulo de cotización y demostrar su calidad con pruebas de caja
negra, caja blanca, cobertura y evaluación del producto.

## Alcance

- Algoritmo de cálculo con las reglas BR-01 a BR-04 del enunciado y BR-05 propuesta por el equipo.
- API REST que expone la cotización y responde errores con códigos de negocio.
- Interfaz web (Next.js) con formulario y desglose del valor.
- Suite de pruebas automatizadas (PyTest) con reporte de cobertura.
- Integración continua en el repositorio de la API y proceso con issues, ramas y pull requests.

**Fuera de alcance.** Persistencia de cotizaciones, autenticación, pagos y rastreo de envíos.
