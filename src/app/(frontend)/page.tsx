import type { Metadata } from 'next'
import { LandingPage } from '@/modules/landing/interface/LandingPage'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Juan Carlos Botero — AI Product & Tech Lead',
  description:
    'AI Product & Tech Lead building AI agents, digital product experiences, and fullstack platforms in production — leading teams where humans and AI work as one.',
  openGraph: {
    title: 'Juan Carlos Botero — AI Product & Tech Lead',
    description:
      'Building AI agents, digital product experiences, and fullstack platforms in production.',
    images: [{ url: '/photos/image.png' }],
  },
}

export default function HomePage() {
  return <LandingPage />
}

// Previous Payload template (kept for reference):
// import PageTemplate, { generateMetadata } from './[slug]/page'
// export default PageTemplate
// export { generateMetadata }
