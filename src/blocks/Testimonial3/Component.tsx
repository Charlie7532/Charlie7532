import type { Testimonial3Type } from '@/payload-types'
import React from 'react'
import { Testimonial3Client } from './Component.client'

type Props = {
    className?: string
} & Testimonial3Type

export const Testimonial3Block: React.FC<Props> = (props) => {
    return <Testimonial3Client {...props} />
}
