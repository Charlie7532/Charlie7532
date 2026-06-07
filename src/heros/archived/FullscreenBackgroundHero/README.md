# FullscreenBackgroundHero

Hero component with a full-screen background image, overlay, and centered content.

## Features

- **Full-screen background image** with customizable overlay opacity
- **Text content**: Eyebrow, title, and description
- **Call-to-action buttons**: Primary and secondary CTAs
- **Content alignment**: Start, center, or end alignment options
- **Dark theme**: Automatically sets header theme to dark for better visibility

## Fields

### Text Content

- `fullscreenEyebrow` - Small text above the title (optional)
- `fullscreenTitle` - Main heading text
- `fullscreenDescription` - Description text below the title (optional)

### CTAs

- `fullscreenCtaPrimary` - Primary call-to-action button (optional)
- `fullscreenCtaSecondary` - Secondary call-to-action button (optional)

### Visual

- `fullscreenBackgroundImage` - Full-screen background image (upload)
- `fullscreenOverlay` - Overlay opacity options:
  - None (transparent)
  - Light (20% black)
  - Medium (40% black) - default
  - Heavy (60% black)

### Layout

- `fullscreenContentAlignment` - Text alignment:
  - Start (left)
  - Center (default)
  - End (right)

## Usage

Select "Fullscreen Background Hero" from the hero type dropdown when editing a page.

## Design Notes

- Uses full viewport height (`min-h-screen`)
- Negative top margin to account for header height (`-mt-[10.4rem]`)
- Text is white with varying opacity for hierarchy
- Background image covers entire hero area
- Overlay helps with text readability
