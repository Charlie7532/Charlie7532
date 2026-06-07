/**
 * Helper functions to convert block design field values into CSS classes
 */

/**
 * Get margin-y classes based on spacing preset
 */
export function getFluidGridMarginY(
    spacingPreset?: 'none' | 'small' | 'medium' | 'large' | null,
): string {
    const spacingMap = {
        none: 'my-0',
        small: 'my-8',
        medium: 'my-16',
        large: 'my-24',
    };

    return spacingMap[spacingPreset || 'medium'];
}

/**
 * Get theme-related props for FluidGrid component
 */
export function getFluidGridThemeProps(
    backgroundTheme: 'default' | 'light' | 'dark' | 'primary',
): {
    theme?: string;
    className?: string;
} {
    const themeMap = {
        default: {},
        light: {
            theme: 'light',
            className: 'bg-background',
        },
        dark: {
            theme: 'dark',
            className: 'bg-foreground text-background',
        },
        primary: {
            theme: 'primary',
            className: 'bg-primary text-primary-foreground',
        },
    };

    return themeMap[backgroundTheme] || themeMap.default;
}

/**
 * Get text alignment classes based on content alignment
 */
export function getContentAlignmentClasses(
    alignment?: 'start' | 'center' | 'end' | null,
): string {
    const alignmentMap = {
        start: 'text-left',
        center: 'text-center',
        end: 'text-right',
    };

    return alignmentMap[alignment || 'start'];
}
