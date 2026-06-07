# ImageTextHero

Un hero moderno y flexible con imagen, contenido de texto y botones de llamada a la acción (CTA).

## Ubicación

`src/heros/ImageTextHero/`

## Características

- **Contenido de texto completo**: Eyebrow, título, subtítulo y descripción
- **CTAs duales**: Dos botones de llamada a la acción configurables (primario y secundario)
- **Imagen hero**: Soporte para imágenes de alta calidad con aspect ratio 16:10
- **Diseño flexible**: Contenido puede ir arriba o abajo de la imagen
- **Alineación configurable**: Texto alineado a la izquierda, centro o derecha
- **Temas de fondo**: Default, light, dark o primary
- **Espaciado ajustable**: Opciones de espaciado none, small, medium, large
- **Header theme automático**: Cambia el tema del header basado en el fondo

## Campos

### Contenido de Texto

- **Eyebrow** (opcional): Texto pequeño sobre el título
- **Title** (opcional): Título principal del hero
- **Subtitle** (opcional): Subtítulo debajo del título
- **Description** (opcional): Texto descriptivo más largo

### Call to Action

- **Primary CTA** (opcional): Botón principal con enlace interno o URL personalizada
- **Secondary CTA** (opcional): Botón secundario con enlace interno o URL personalizada

### Imagen

- **Hero Image** (opcional): Imagen principal del hero

### Layout & Design

- **Text Placement**: Posición del texto (arriba o abajo de la imagen)
- **Text Alignment**: Alineación del contenido (start, center, end)
- **Spacing Preset**: Espaciado vertical (none, small, medium, large)
- **Background Theme**: Tema de fondo (default, light, dark, primary)

## Uso en Payload

1. Navega a una página en el admin de Payload
2. En la sección "Hero", selecciona el tipo "Image & Text Hero"
3. Configura los campos según tus necesidades
4. Guarda y publica

## Responsividad

El hero es completamente responsive:

- **Mobile**: Layout de una columna con tipografía ajustada
- **Tablet**: Espaciado y tipografía intermedia
- **Desktop**: Layout completo con máximo ancho de 7xl

## Estilos

Utiliza Tailwind CSS y las clases de utilidad del proyecto. Los temas de fondo y espaciado son completamente configurables desde el admin de Payload.

## Integración

El hero se renderiza automáticamente a través de `RenderHero.tsx` cuando se selecciona el tipo "imageText" en la configuración de hero de una página.
