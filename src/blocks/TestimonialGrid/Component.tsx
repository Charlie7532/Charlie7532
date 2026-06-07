import type { TestimonialGridBlock as TestimonialGridBlockProps } from '@/payload-types'
import React from 'react'
import { TestimonialGridClient } from './Component.client'

type Props = {
    className?: string
} & TestimonialGridBlockProps

export const TestimonialGridBlock: React.FC<Props> = (props) => {
    return <TestimonialGridClient {...props} />
}
