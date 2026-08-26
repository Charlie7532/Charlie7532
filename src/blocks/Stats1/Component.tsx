import type { Stats1Block as Stats1BlockProps } from '@/payload-types'
import React from 'react'
import { Stats1Client } from './Component.client'

type Props = {
    className?: string
} & Stats1BlockProps

export const Stats1Block: React.FC<Props> = (props) => {
    return <Stats1Client {...props} />
}
