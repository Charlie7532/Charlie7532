import type { Testimonial4Type } from '@/payload-types'
import React from 'react'
import { Testimonial4Client } from './Component.client'

type Props = {
    className?: string
} & Testimonial4Type

export const Testimonial4Block: React.FC<Props> = (props) => {
    return <Testimonial4Client {...props} />
}
