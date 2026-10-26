import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "FastExpress",
    description: "Informe tecnico de Calidad de Software - FastExpress",
    lang: "es-CO",
    cleanUrls: true,
    ignoreDeadLinks: true,
    markdown: {
      math: true,
    },
    themeConfig: {
      nav: [
        { text: "Inicio", link: "/" },
        { text: "Informe", link: "/informe/" },
        { text: "Caja negra", link: "/informe/05-caja-negra" },
        { text: "Caja blanca", link: "/informe/06-caja-blanca" },
        { text: "Cobertura", link: "/informe/07-cobertura-resultados" },
        {
          text: "Docs QA",
          items: [
            { text: "Plan de pruebas", link: "/qa/plan-de-pruebas" },
            { text: "Casos de prueba", link: "/qa/casos-de-prueba" },
            { text: "Metricas", link: "/calidad/metricas" },
            { text: "Trazabilidad", link: "/calidad/trazabilidad" },
          ],
        },
        {
          text: "Repos",
          items: [
            { text: "API", link: "https://github.com/eldani13/fastexpress-api" },
            { text: "Frontend", link: "https://github.com/eldani13/fastexpress-frontend" },
            { text: "QA", link: "https://github.com/eldani13/fastexpress-qa" },
          ],
        },
      ],
      sidebar: {
        "/informe/": [
          {
            text: "Informe tecnico",
            items: [
              { text: "Indice y cumplimiento", link: "/informe/" },
              { text: "1. Datos del proyecto", link: "/informe/01-portada-y-datos" },
              { text: "2. Introduccion y alcance", link: "/informe/02-introduccion-alcance" },
              { text: "3. Especificacion", link: "/informe/03-especificacion" },
              { text: "4. Arquitectura y estrategia", link: "/informe/04-arquitectura-estrategia" },
              { text: "5. Caja negra", link: "/informe/05-caja-negra" },
              { text: "6. Caja blanca (CFG)", link: "/informe/06-caja-blanca" },
              { text: "7. Cobertura", link: "/informe/07-cobertura-resultados" },
              { text: "8. Defectos", link: "/informe/08-defectos" },
              { text: "9. Metricas ISO 9126", link: "/informe/09-metricas-iso" },
              { text: "10. Conclusiones", link: "/informe/10-conclusiones" },
              { text: "Documento completo", link: "/informe/INFORME-TECNICO" },
            ],
          },
        ],
        "/qa/": [
          {
            text: "Documentacion QA",
            items: [
              { text: "Plan de pruebas", link: "/qa/plan-de-pruebas" },
              { text: "Casos de prueba", link: "/qa/casos-de-prueba" },
              { text: "Sesiones exploratorias", link: "/qa/sesiones-exploratorias" },
              { text: "Bitacora", link: "/qa/bitacora" },
              { text: "Reporte ciclo 1", link: "/qa/reportes/ciclo-1" },
            ],
          },
        ],
        "/calidad/": [
          {
            text: "Calidad",
            items: [
              { text: "Plan de calidad", link: "/calidad/plan-de-calidad" },
              { text: "Metricas", link: "/calidad/metricas" },
              { text: "Trazabilidad", link: "/calidad/trazabilidad" },
            ],
          },
        ],
      },
      socialLinks: [
        { icon: "github", link: "https://github.com/eldani13/fastexpress-qa" },
      ],
      search: { provider: "local" },
      outline: { level: [2, 3], label: "En esta pagina" },
      docFooter: { prev: "Anterior", next: "Siguiente" },
      footer: {
        message: "Proyecto Integrador - Calidad de Software",
        copyright: "FastExpress - Equipo de 3 integrantes - 2026",
      },
    },
    mermaid: {
      theme: "neutral",
    },
  }),
);
