# Olivia's Group — Landing Page Corporativa

## Descripción general

Este proyecto es una landing page desarrollada con React, TypeScript y Vite para presentar una marca enfocada en soluciones sostenibles, consultoría ambiental y productos ecológicos. La aplicación está diseñada como una experiencia de marketing digital moderna, con navegación por anclas, estructura clara de contenido y un diseño amigable para dispositivos móviles y escritorio.

La intención principal es comunicar la identidad de la empresa, mostrar sus pilares de valor, explicar sus servicios y convertir visitas en oportunidades de contacto a través de acciones concretas como WhatsApp y formularios de contacto.

## Objetivo del proyecto

- Presentar la empresa con una identidad visual cohesiva.
- Comunicar la misión, visión y pilares de valor de la marca.
- Mostrar servicios de consultoría ambiental y sostenibilidad.
- Exponer un catálogo de productos eco-friendly con CTA directo de compra.
- Mejorar la presencia digital y el posicionamiento mediante metadata SEO.
- Preparar una base escalable para futuras ampliaciones del proyecto.

## Stack técnico

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Vitest
- Testing Library
- jsdom

## Arquitectura y flujo del aplicativo

La aplicación se estructura como una single-page landing page, donde cada sección representa un bloque de valor para la marca.

### Componentes funcionales principales

1. Navegación
   - Se encuentra en la parte superior del sitio.
   - Incluye enlaces tipo ancla hacia las secciones principales del landing page.
   - Tiene una versión móvil con menú desplegable para mantener la experiencia responsive.

2. Hero o presentación principal
   - Tiene una propuesta clara de valor y encuadre comercial.
   - Establece la identidad de la marca y comunica su enfoque sostenible.

3. Sección de empresa
   - Presenta la misión, visión y pilares corporativos.
   - Ayuda a construir confianza y posicionamiento de marca.

4. Servicios
   - Explica áreas de consultoría ambiental y desarrollo sostenible.
   - Organiza información de forma visual para facilitar la lectura.

5. Catálogo de productos
   - Muestra diferentes líneas de limpieza y cuidado ecológico.
   - Cada tarjeta tiene un botón con enlace directo a WhatsApp para facilitar la compra o consulta.

6. Footer
   - Cierra la experiencia y ofrece información general de contacto institucional.
   - Mantiene la identidad visual del sitio y da continuidad a la narrativa.

## Cambios clave realizados durante la creación

### 1. Integración de Tailwind CSS

Se configuró Tailwind dentro del proyecto Vite utilizando el plugin adecuado para React. Esto permitió una base de estilos más rápida, consistente y mantenible, con una estructura de clases directa y reutilizable.

### 2. Rediseño de la marca

Se reemplazó la identidad visual inicial por una propuesta enfocada en sostenibilidad, confianza y claridad. El diseño usa una paleta verde y beige que acompaña la narrativa ambiental y corporativa.

### 3. Navegación con enlaces ancla

Se implementaron enlaces internos para mover al usuario entre las diferentes secciones del landing page. Esto mejora la experiencia UX y facilita la navegación rápida dentro del sitio.

### 4. SEO y metadatos

Se añadieron etiquetas relevantes para mejorar la indexación en buscadores como Google y Bing, incluyendo:

- título de la página
- descripción
- palabras clave
- metadata Open Graph
- favicon personalizada
- canonical URL

### 5. Integración de catálogo dinámico

Los productos están centralizados en constantes exportadas para facilitar mantenimiento y pruebas. Cada producto tiene nombre, categoría y descripción. Esto permite escalabilidad sin duplicación de lógica.

### 6. Generación de enlaces de WhatsApp dinámicos

Cada producto genera una URL con el nombre del artículo para personalizar la consulta por WhatsApp. Esto mejora la conversión y facilita la atención comercial.

### 7. Pruebas unitarias

Se añadieron pruebas para asegurar que la información de contacto y los enlaces del catálogo mantengan estructura válida y no generen enlaces sospechosos o incompletos.

## Estructura del proyecto

```text
src/
  App.tsx          # Lógica principal del landing page
  main.tsx         # Punto de entrada de la app
  index.css        # Estilos globales y Tailwind
  test/
    setup.ts       # Configuración de Testing Library
src/App.test.tsx   # Pruebas unitarias del proyecto
public/
  og-favicon.svg   # Favicon personalizado de la marca
index.html         # Metadata de la aplicación y SEO
vite.config.ts     # Configuración de Vite + Tailwind + testing
package.json       # Scripts y dependencias del proyecto
```

## Cómo ejecutar el proyecto

### Instalación

```bash
npm install
```

### Desarrollo local

```bash
npm run dev
```

### Compilación de producción

```bash
npm run build
```

### Pruebas unitarias

```bash
npm test
```

## Pruebas unitarias incluidas

La suite actual valida principalmente:

- la integridad de la información institucional reutilizada
- enlaces de WhatsApp generados para cada producto
- la ausencia de patrones inválidos o sospechosos en los enlaces
- la consistencia de los textos y estructuras de negocio

Estas pruebas están pensadas para reforzar la mantenibilidad del proyecto y asegurar que los cambios futuros no rompan la lógica crítica del sitio.

## Buenas prácticas de mantenimiento

- Mantener la información centralizada en los datos exportados del archivo principal.
- Cuando se añadan nuevas secciones, mantener la navegación ancla actualizada.
- Reutilizar estilos con Tailwind para mantener consistencia visual.
- Agregar comentarios y documentación cuando se amplíe la marca o el catálogo.
- Validar enlaces e información antes de publicar cambios.

## Observaciones de escalabilidad

El proyecto ya está preparado para crecer sin perder claridad. Algunas evoluciones futuras naturales podrían ser:

- agregar un blog o sección de noticias
- incorporar un formulario más robusto
- modularizar las secciones en componentes reutilizables
- añadir CMS o base de datos para gestión de contenido
- ampliar el catálogo con filtros y categorías dinámicas

## Roadmap del proyecto

El proyecto está en fase piloto, por lo que su evolución se orienta a consolidar la propuesta de valor, mejorar la experiencia digital y preparar una base para crecimiento futuro sin forzar complejidad prematura.

### Fase 1 — Consolidación del MVP

- [x] Definir la identidad visual de la marca.
- [x] Crear la estructura del landing page con navegación ancla.
- [x] Diseñar hero, empresa, servicios y producto.
- [x] Configurar Tailwind y estilos globales coherentes.
- [x] Añadir SEO básico para buscadores.
- [x] Verificar que los enlaces de contacto y WhatsApp funcionen correctamente.
- [x] Generar pruebas unitarias para validación de datos críticos.

### Fase 2 — Optimización de experiencia y conversión

- [ ] Mejorar la estrategia de llamados a la acción en cada sección.
- [ ] Revisar mensajes para una mayor claridad comercial y emocional.
- [ ] Ajustar las proporciones visuales y espaciamiento para mayor fluidez UX.
- [ ] Evaluar métricas de interacción y comportamiento del usuario.
- [ ] Probar la landing page en más dispositivos y tamaños de pantalla.

### Fase 3 — Escalabilidad del contenido

- [ ] Modularizar secciones en componentes reutilizables.
- [ ] Permitir actualizar productos y servicios sin tocar la lógica central.
- [ ] Añadir una capa de gestión de contenido más flexible.
- [ ] Preparar la estructura para incluir blog, casos de éxito o testimonios.

### Fase 4 — Expansión comercial y estructura profesional

- [ ] Diseñar un flujo de leads más completo.
- [ ] Añadir formularios avanzados y validaciones.
- [ ] Integrar analítica y seguimiento de conversiones.
- [ ] Preparar la base para futuras secciones de marca, proyectos y cartera.

### Fase 5 — Evolución a producto digital más robusto

- [ ] Evaluar la posibilidad de un back office o panel administrativo.
- [ ] Integrar gestión de catálogos con datos más dinámicos.
- [ ] Mejorar la arquitectura para crecimiento del equipo o proyecto.
- [ ] Definir la estrategia de mantenimiento, despliegue y documentación formal.

## Próximos pasos recomendados

Estas propuestas están pensadas para la siguiente etapa del crecimiento del proyecto y apuntan a mejorar la presencia digital, la conversión y la inteligencia comercial.

### 1. Integración de redes sociales

- [ ] Añadir secciones con enlaces a redes sociales oficiales.
- [ ] Incorporar contenido visual de Instagram, Facebook o TikTok para reforzar la marca.
- [ ] Crear CTA específicos por canal para aumentar tráfico y interacciones.
- [ ] Sustentar la comunicación con contenido más cercano a la comunidad objetivo.

### 2. Analítica web con Google Analytics

- [ ] Integrar Google Analytics para medir tráfico, páginas más visitadas y tiempo de permanencia.
- [ ] Configurar eventos de interés, como clics en WhatsApp, navegación por catálogo y consultas de contacto.
- [ ] Visualizar comportamiento del público para tomar decisiones basadas en datos reales.
- [ ] Monitorear campañas, canales y contenido con métricas de conversión.

### 3. Visualización 3D de productos

- [ ] Implementar experiencias 3D para productos destacados con rotación, zoom o interacción.
- [ ] Mejorar la percepción del detalle y la calidad de cada artículo.
- [ ] Dar una sensación más premium y moderna a la vitrina digital.
- [ ] Diseñar una experiencia inmersiva para facilitar la decisión de compra.

### 4. Catálogo amplio y detallado

- [ ] Ampliar el listado de productos por categorías, subcategorías y atributos.
- [ ] Añadir información técnica, materiales, beneficios, usos y presentaciones.
- [ ] Permitir filtros por necesidad, uso o tipo de producto.
- [ ] Diseñar páginas de detalle para cada item con descripción comercial y visual más rica.

### 5. Base de datos para almacenamiento y análisis

- [ ] Definir una base de datos estable para almacenar productos, inventario, clientes y ventas.
- [ ] Registrar comportamiento de compra para identificar qué productos tienen mayor demanda.
- [ ] Generar reportes de tendencia por producto, temporada y canal de adquisición.
- [ ] Crear un sistema de análisis para informar decisiones comerciales y de stock.

### 6. Marketing técnico y análisis comercial

- [ ] Medir qué productos compran más los clientes y por qué.
- [ ] Relacionar campañas, canales y categorías con volumen de ventas.
- [ ] Construir dashboards con métricas clave de negocio.
- [ ] Usar la información para mejorar promociones, inventario y posicionamiento de marca.

## Estado actual

El proyecto se encuentra en una versión funcional y documentada, con diseño responsive, SEO básico, navegación por secciones, catálogo de productos y validación de enlaces clave.

---

Este README está pensado como una guía clara para desarrolladores, colaboradores y personas que quieran comprender el propósito del proyecto y su evolución sin necesidad de revisar todo el código sin contexto.
