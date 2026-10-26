---
layout: home

hero:
  name: FastExpress QA
  text: Informe técnico de Calidad
  tagline: Cotizador de envíos — caja negra, caja blanca, cobertura ? 85 %
  actions:
    - theme: brand
      text: Leer el informe
      link: /informe/
    - theme: alt
      text: Caja negra
      link: /informe/05-caja-negra
    - theme: alt
      text: Caja blanca (CFG)
      link: /informe/06-caja-blanca
    - theme: alt
      text: Cobertura
      link: /informe/07-cobertura-resultados

features:
  - title: Caja negra
    details: Particiones de equivalencia y BVA para Peso y Monto, más tabla de decisión Cliente × Envío (38 casos aprobados).
    link: /informe/05-caja-negra
  - title: Caja blanca
    details: Grafos CFG en Mermaid, cálculo de V(G) por tres métodos y 13 caminos independientes con prueba.
    link: /informe/06-caja-blanca
  - title: Cobertura
    details: Líneas y ramas por encima del 85 % exigido; análisis del ciclo 1 y actualización del ciclo 2.
    link: /informe/07-cobertura-resultados
  - title: Defectos y métricas
    details: DEF-001…006, ISO 9126 y trazabilidad del proceso de calidad.
    link: /informe/08-defectos
---

## Cómo ejecutar este sitio

```bash
cd fastexpress-qa
npm install
npm run dev
```

Abre la URL que muestre la terminal (normalmente http://localhost:5173).

## Cumplimiento del enunciado

| Requisito del profesor | Sección |
|---|---|
| EP + BVA Peso y Monto | [§5 Caja negra](/informe/05-caja-negra) |
| Tabla de decisión | [§5.5](/informe/05-caja-negra#55-tabla-de-decisión-tipo-de-cliente--tipo-de-envío-br-03-br-04) |
| CFG + V(G) + caminos | [§6 Caja blanca](/informe/06-caja-blanca) |
| Cobertura ? 85 % | [§7 Cobertura](/informe/07-cobertura-resultados) |
