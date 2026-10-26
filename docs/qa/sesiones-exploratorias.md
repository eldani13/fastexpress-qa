# Sesiones de prueba exploratoria

Responsable: Analista de Calidad (QA)

Cada sesión tiene un objetivo (charter), una duración fija y un registro de hallazgos.
Formato: *Explorar \<qué\> con \<recursos\> para descubrir \<tipo de problema\>.*

## Sesión 1: valores extremos y formatos reales

| Campo | Detalle |
|---|---|
| Fecha | 2026-10-13 |
| Duración | 45 minutos |
| Charter | Explorar los campos numéricos con valores extremos y formatos que usa una persona en Colombia, para descubrir respuestas no controladas o mensajes engañosos |
| Versión probada | `main` del 2026-10-12 |

### Ideas probadas

| Entrada | Dónde | Resultado | Hallazgo |
|---|---|---|---|
| Peso de 29 dígitos | API | 500 | DEF-004 |
| `1e1000000`, `1e308` | API | 500 | DEF-004 |
| `1E2` (notación científica razonable) | API | 422 `LIMITE_PESO_EXCEDIDO` | Correcto |
| Monto de 29 dígitos | API | 500 | DEF-004 |
| Peso de 29 dígitos | Interfaz | "No hay conexión con el servidor" | DEF-005 |
| Monto `1,000`, `1.500`, `12,000` | Interfaz | "Usa máximo 2 decimales." | DEF-006 |
| Peso `4,5` (coma decimal) | Interfaz | Aceptado como 4.50 | Correcto |
| Tipo de cliente `vip` en minúsculas | API | 422 `ENTRADA_INVALIDA` | Correcto según la especificación |

### Resumen

3 defectos nuevos (DEF-004 a DEF-006). Cada uno tiene una prueba automatizada que lo reproduce.

---

## Ideas para próximas sesiones

1. **Interfaz con teclado:** completar y enviar el formulario usando solo Tab, flechas y Enter.
2. **Clics repetidos:** pulsar "Cotizar envío" varias veces seguidas y cambiar datos mientras responde.
3. **Servidor apagado:** apagar el backend con la página abierta y cotizar; volver a encenderlo.
4. **Windows:** ejecutar `scripts\ejecutar-todo.ps1` y comparar resultados con el ciclo 1.
5. **Copiar y pegar:** pegar valores con espacios, saltos de línea o el símbolo `$`.
6. **Zoom al 200 %:** verificar que la guía y el formulario siguen siendo legibles.
