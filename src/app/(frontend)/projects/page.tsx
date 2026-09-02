import type { Metadata } from 'next/types'
import React from 'react'

import { ProjectsArchive } from '@/collections/Projects/interface/ProjectsArchive'
import PageClient from './page.client'

export const revalidate = 600

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'The complete archive of projects I’ve built over the years — client work, platforms and personal experiments, each with a full case study.',
}

export default function ProjectsPage() {
    return (
        <>
            <PageClient />
            <ProjectsArchive />
        </>
    )
}
