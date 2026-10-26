# FastExpress

Sitio de documentación e **informe técnico de Calidad de Software** del cotizador FastExpress.

## Ejecutar (leer el informe en el navegador)

```bash
cd fastexpress-qa
npm install
npm run dev
```

Abre **http://localhost:5173**

| Comando | Qué hace |
|---|---|
| `npm run dev` | Sitio en vivo con recarga |
| `npm run build` | Genera sitio estático en `docs/.vitepress/dist` |
| `npm run preview` | Sirve el build de producción |

## Repos del proyecto

| Rol | Repositorio |
|---|---|
| API | https://github.com/eldani13/fastexpress-api |
| Frontend | https://github.com/eldani13/fastexpress-frontend |
| QA | https://github.com/eldani13/fastexpress-qa |

## Contenido del sitio

- **Informe** (`docs/informe/`) — caja negra, caja blanca (CFG Mermaid), cobertura, defectos, métricas
- **QA** (`docs/qa/`) — plan, casos, reportes, bitácora
- **Calidad** (`docs/calidad/`) — métricas ISO 9126, trazabilidad

## Cumplimiento del enunciado

| Requisito | Ruta en el sitio |
|---|---|
| EP + BVA + tabla de decisión | `/informe/05-caja-negra` |
| CFG + V(G) + caminos | `/informe/06-caja-blanca` |
| Cobertura ≥ 85 % | `/informe/07-cobertura-resultados` |
