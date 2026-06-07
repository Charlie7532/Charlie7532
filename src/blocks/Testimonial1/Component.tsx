import type { Testimonial1Block as Testimonial1BlockProps } from '@/payload-types'
import React from 'react'
import { Testimonial1Client } from './Component.client'

type Props = {
    className?: string
} & Testimonial1BlockProps

export const Testimonial1Block: React.FC<Props> = (props) => {
    return <Testimonial1Client {...props} />
}
