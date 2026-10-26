---
layout: home

hero:
  name: FastExpress QA
  text: Informe tecnico de Calidad
  tagline: Cotizador de envios - caja negra, caja blanca, cobertura >= 85%
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
    details: Particiones de equivalencia y BVA para Peso y Monto, mas tabla de decision Cliente x Envio (38 casos aprobados).
    link: /informe/05-caja-negra
  - title: Caja blanca
    details: Grafos CFG en Mermaid, calculo de V(G) por tres metodos y 13 caminos independientes con prueba.
    link: /informe/06-caja-blanca
  - title: Cobertura
    details: Lineas y ramas por encima del 85% exigido; analisis del ciclo 1 y actualizacion del ciclo 2.
    link: /informe/07-cobertura-resultados
  - title: Defectos y metricas
    details: DEF-001 a DEF-006, ISO 9126 y trazabilidad del proceso de calidad.
    link: /informe/08-defectos
---

## Como ejecutar este sitio

```bash
cd fastexpress-qa
npm install
npm run dev
```

Abre http://127.0.0.1:5173

## Cumplimiento del enunciado

| Requisito del profesor | Seccion |
|---|---|
| EP + BVA Peso y Monto | [Caja negra](/informe/05-caja-negra) |
| Tabla de decision | [Caja negra 5.5](/informe/05-caja-negra) |
| CFG + V(G) + caminos | [Caja blanca](/informe/06-caja-blanca) |
| Cobertura >= 85% | [Cobertura](/informe/07-cobertura-resultados) |
