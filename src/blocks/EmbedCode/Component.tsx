import React from 'react'

import { EmbedCodeBlockClient, type EmbedCodeBlockProps } from './Component.client'

type Props = EmbedCodeBlockProps & {
    className?: string
}

export const EmbedCodeBlock: React.FC<Props> = ({ className, ...props }) => {
    return (
        <div className={className}>
            <EmbedCodeBlockClient {...props} />
        </div>
    )
}
