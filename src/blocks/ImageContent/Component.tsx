import type React from 'react';
import type { ImageContentType } from '@/payload-types';
import { cn } from '@/utilities/ui';
import { CMSLink } from '@/components/Link';
import { Media } from '@/components/Media';

type ImageContentProps = {
    className?: string;
} & ImageContentType;

export const ImageContentBlock: React.FC<ImageContentProps> = ({
    eyebrow,
    title,
    description,
    image,
    cta,
    textPlacement = 'left',
    spacingPreset = 'medium',
    backgroundTheme = 'default',
    contentAlignment = 'start',
    className,
}) => {
    // Spacing classes
    const spacingClasses = {
        none: 'py-0',
        small: 'py-8',
        medium: 'py-12 md:py-16 lg:py-20',
        large: 'py-16 md:py-24 lg:py-32',
    };

    // Background theme classes
    const themeClasses = {
        default: 'bg-background text-foreground',
        light: 'bg-gray-50 text-foreground',
        dark: 'bg-gray-900 text-white',
        primary: 'bg-primary text-primary-foreground',
    };

    // Alignment classes
    const alignmentClasses = {
        start: 'text-left items-start',
        center: 'text-center items-center',
        end: 'text-right items-end',
    };

    const contentFirst = textPlacement === 'left';
    const imageHasData = image && typeof image === 'object';

    return (
        <section
            className={cn(
                spacingClasses[spacingPreset as keyof typeof spacingClasses],
                themeClasses[backgroundTheme as keyof typeof themeClasses],
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Text Content */}
                    <div
                        className={cn(
                            'flex flex-col gap-6',
                            alignmentClasses[contentAlignment as keyof typeof alignmentClasses],
                            {
                                'lg:order-1': contentFirst,
                                'lg:order-2': !contentFirst,
                            },
                        )}
                    >
                        {eyebrow && (
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                {eyebrow}
                            </span>
                        )}

                        {title && (
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
                        )}

                        {cta?.label && (
                            <div className="mt-2">
                                <CMSLink {...cta} />
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    {imageHasData && (
                        <div
                            className={cn('relative', {
                                'lg:order-2': contentFirst,
                                'lg:order-1': !contentFirst,
                            })}
                        >
                            <Media
                                resource={image}
                                className="relative aspect-16/10 w-full overflow-hidden rounded-lg"
                                imgClassName="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
