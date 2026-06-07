# CTA Section Block

## Descripción

Un bloque de Call-to-Action (CTA) simple y flexible que permite crear secciones atractivas para dirigir a los usuarios a realizar acciones específicas.

## Características

- **Título y descripción**: Texto personalizable para comunicar el mensaje
- **Dos botones CTA**: Primario y secundario (ambos opcionales)
- **Alineación flexible**: Controla la alineación del texto (inicio, centro, fin)
- **Temas de fondo**: Default, Light, Dark, Primary
- **Espaciado configurable**: None, Small, Medium, Large
- **Diseño fluido**: Adaptable a diferentes tamaños de pantalla

## Campos

### Text Content

- **title** (requerido): El título principal del CTA
- **description** (opcional): Texto descriptivo adicional

### Call to Action Buttons

- **ctaPrimary** (opcional): Botón de acción principal
- **ctaSecondary** (opcional): Botón de acción secundaria

### Layout

- **textAlignment**: Alineación del texto (start, center, end)

### Design

- **spacingPreset**: Espaciado vertical (none, small, medium, large)
- **backgroundTheme**: Tema del fondo (default, light, dark, primary)
- **contentAlignment**: Alineación horizontal del contenido

## Uso

Este bloque está disponible en la sección "Content" al editar páginas en Payload CMS.

## Componentes utilizados

- Clases de Tailwind CSS para diseño responsivo
- `CMSLink`: Componente de enlace del CMS
- Sistema de contenedores y grids estándar del proyecto

## Estructura

El componente sigue el patrón estándar de bloques del proyecto con:

- Sección con spacing y temas configurables
- Contenedor responsivo centrado
- Alineación flexible de contenido
- Tipografía escalable y accesible

## Ejemplo de uso

```typescript
{
  blockType: 'ctaSection',
  title: 'Comienza hoy mismo',
  description: 'Únete a miles de usuarios que ya están aprovechando nuestra plataforma',
  ctaPrimary: {
    label: 'Registrarse gratis',
    type: 'custom',
    url: '/signup'
  },
  ctaSecondary: {
    label: 'Ver demo',
    type: 'custom',
    url: '/demo'
  },
  textAlignment: 'center',
  spacingPreset: 'large',
  backgroundTheme: 'primary',
  contentAlignment: 'center'
}
```
