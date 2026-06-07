import React from 'react'
import { Pricing1Client } from './Component.client'

// Type will be available in payload-types after running `pnpm generate:types`
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Pricing1Block: React.FC<any> = (props) => {
    return <Pricing1Client {...props} />
}
