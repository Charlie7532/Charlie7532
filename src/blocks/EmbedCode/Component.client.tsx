'use client'

import React, { useEffect, useRef } from 'react'

type WidthMode = 'full' | 'content' | 'custom'

export type EmbedCodeBlockProps = {
    blockType: 'embedCode'
    embedCode: string
    widthMode?: WidthMode | null
    customWidth?: number | null
}

export const EmbedCodeBlockClient: React.FC<EmbedCodeBlockProps> = ({
    embedCode,
    widthMode = 'content',
    customWidth,
}) => {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current

        if (!container) return

        let isCancelled = false

        const renderEmbed = async () => {
            container.innerHTML = ''

            const template = document.createElement('template')
            template.innerHTML = embedCode || ''

            const nodes = Array.from(template.content.childNodes)

            for (const node of nodes) {
                if (isCancelled) return

                if (node.nodeName.toLowerCase() === 'script') {
                    const script = node as HTMLScriptElement
                    const newScript = document.createElement('script')

                    Array.from(script.attributes).forEach((attribute) => {
                        newScript.setAttribute(attribute.name, attribute.value)
                    })

                    if (script.textContent) {
                        newScript.textContent = script.textContent
                    }

                    const scriptLoaded =
                        script.src.length > 0
                            ? new Promise<void>((resolve) => {
                                newScript.addEventListener('load', () => resolve(), { once: true })
                                newScript.addEventListener('error', () => resolve(), { once: true })
                            })
                            : Promise.resolve()

                    container.appendChild(newScript)
                    await scriptLoaded

                    continue
                }

                container.appendChild(node.cloneNode(true))
            }
        }

        void renderEmbed()

        return () => {
            isCancelled = true
            container.innerHTML = ''
        }
    }, [embedCode])

    const outerClassName =
        widthMode === 'full'
            ? 'relative left-1/2 w-screen max-w-none -translate-x-1/2 px-4 sm:px-6'
            : 'w-full'

    const innerStyle =
        widthMode === 'custom' && customWidth
            ? ({ maxWidth: `${customWidth}px`, marginInline: 'auto' } as React.CSSProperties)
            : undefined

    return (
        <div className={outerClassName}>
            <div
                ref={containerRef}
                className="mx-auto w-full overflow-x-auto [&_iframe]:max-w-full"
                style={innerStyle}
            />
        </div>
    )
}
