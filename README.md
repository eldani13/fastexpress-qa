# FastExpress QA

Repositorio del Analista de Calidad (Luis Daniel Cantillo Ospino): plan de pruebas,
defectos, reportes, métricas ISO 9126, trazabilidad e **informe técnico** exigido por el
Proyecto Integrador.

## Repos del proyecto

| Rol | Repositorio |
|---|---|
| API | https://github.com/eldani13/fastexpress-api |
| Frontend | https://github.com/eldani13/fastexpress-frontend |
| QA | https://github.com/eldani13/fastexpress-qa |

## Informe técnico (entregable del profesor)

Carpeta **[`docs/informe/`](docs/informe/README.md)** — proyecto de documentación completo:

| Requisito | Archivo |
|---|---|
| Caja negra (EP, BVA, tabla de decisión) | [`05-caja-negra.md`](docs/informe/05-caja-negra.md) |
| Caja blanca (CFG, V(G), caminos) | [`06-caja-blanca.md`](docs/informe/06-caja-blanca.md) |
| Cobertura ≥ 85 % + análisis | [`07-cobertura-resultados.md`](docs/informe/07-cobertura-resultados.md) |
| **Documento unificado** | [`INFORME-TECNICO.md`](docs/informe/INFORME-TECNICO.md) |

## Contenido del repo

- `docs/informe/` — informe técnico (caja negra, blanca, cobertura, defectos, métricas)
- `docs/qa/` — plan IEEE 829, casos, defectos DEF-001…006, sesiones, reportes, bitácora
- `docs/calidad/` — plan de calidad, métricas, trazabilidad
- `docs/proceso/` — ciclo de vida de defectos y actas
- `.github/ISSUE_TEMPLATE/` — plantilla de reporte de defecto

## Cómo exportar a PDF

1. Abrir `docs/informe/INFORME-TECNICO.md` en VS Code / Typora / Pandoc.
2. Ejemplo con Pandoc:

```bash
pandoc docs/informe/INFORME-TECNICO.md -o Informe-Calidad-Software-FastExpress.pdf --toc
```

Los diagramas CFG están en Mermaid (GitHub los renderiza en la web; Pandoc puede requerir filtro mermaid).
