# 4. Arquitectura, herramientas y estrategia de pruebas

La lógica de negocio vive en un módulo independiente de la API y de la interfaz
(`fastexpress-api/app/core/`), lo que permite probarla sin levantar el servidor.

## 4.1 Componentes

| Componente | Tecnología | Ubicación |
|---|---|---|
| Core de negocio | Python 3.12+, `decimal.Decimal` | `app/core/` (`reglas.py`, `errores.py`, `cotizador.py`) |
| API REST | FastAPI | `app/main.py`, `app/schemas.py` |
| Interfaz | Next.js 15 + React 19 | repo `fastexpress-frontend` |
| Pruebas | PyTest, pytest-cov, TestClient, Playwright | `tests/unit/`, `tests/api/`, `tests/e2e/` |
| CI | GitHub Actions (`pruebas`) | `.github/workflows/pruebas.yml` |

## 4.2 Estrategia de pruebas

| Nivel | Técnica | Objeto | Casos (ciclo 1) |
|---|---|---|---|
| Unidad / integración lógica | Caja negra (EP, BVA, decisión) | Peso, monto, cliente×envío | 38 |
| Unidad | Caja blanca (caminos) | `calcular_tarifa`, `validar_cotizacion` | 13 |
| Unidad | Robustez | Entradas atípicas y propiedad del desglose | 223 |
| API | Contrato HTTP | `POST /api/v1/cotizaciones` | 16 + 3 xfail DEF-004 |
| Sistema | E2E Playwright | Interfaz | 9 + 4 xfail DEF-005/006 |

La matriz de caja negra se escribió **antes** del código, según la hoja de ruta del proyecto.
