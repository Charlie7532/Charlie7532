# Video Hero

Hero de página con video de fondo, overlay personalizable y contenido animado.

## Características

### ✅ Fuentes de Video

- **Upload**: Sube archivos de video (MP4, WebM)
- **URL Externa**: YouTube, Vimeo o URLs directas de video

### 🎨 Personalización Visual

- **Altura**: Small (60vh), Medium (75vh), Large (90vh), Full Screen (100vh)
- **Overlay**: Color y opacidad personalizables
  - Colores: Black, Primary, Secondary, None
  - Opacidad: 0-100%
- **Poster Image**: Imagen de preview antes de cargar el video
- **Alineación**: Start, Center, End

### 🎬 Controles de Video

- **Autoplay**: Reproducción automática
- **Loop**: Repetir continuamente
- **Muted**: Sin sonido (requerido para autoplay)
- **Show Controls**: Mostrar controles de reproducción

### 📝 Contenido

- **Rich Text**: Contenido con formato (títulos, párrafos, etc.)
- **Links**: Hasta 2 llamados a la acción (CTAs)
- 🌐 Localización completa

## Uso en Payload

1. Ir a Pages → Editar página → **Hero tab**
2. Seleccionar tipo: **"Video Hero"**
3. Configurar contenido de texto (Rich Text)
4. Agregar links (CTAs opcionales)
5. Seleccionar fuente de video (Upload o URL)
6. Ajustar configuración de video, overlay y altura
7. Guardar y publicar

## Notas Técnicas

### Autoplay

- Los navegadores modernos requieren `muted: true` para autoplay
- El video debe estar optimizado para web (compresión)

### Formatos Recomendados

- **Video**: MP4 (H.264), WebM
- **Poster**: JPG, PNG, WebP
- **Resolución**: 1920x1080 o superior
- **Duración**: 10-30 segundos para loops efectivos

### URLs de Video Soportadas

- YouTube: `https://youtube.com/watch?v=...` o `https://youtu.be/...`
- Vimeo: `https://vimeo.com/...`
- URLs directas: `.mp4`, `.webm`, etc.

## Diferencias con otros Heroes

### High Impact

- Usa imagen estática con parallax
- Múltiples overlays de gradiente
- Efecto de scroll

### Medium Impact

- Imagen con fade in
- Sin parallax
- Menos overlays

### Low Impact

- Solo texto
- Sin imagen de fondo

### **Video Hero** ⭐

- Video de fondo (upload o URL)
- Autoplay y loop
- Overlay personalizable
- Animaciones framer-motion

## Performance

### Optimización de Video

- Comprimir videos antes de subir
- Usar resolución apropiada (no mayor a 1080p para web)
- Considerar lazy loading para videos no críticos
- Usar poster image para carga inicial más rápida

### Mejores Prácticas

- Videos de fondo: 10-30 segundos en loop
- Archivos: < 5MB para mejor performance
- Siempre incluir poster image
- Texto debe tener buen contraste con video
- Usar muted=true para autoplay confiable
