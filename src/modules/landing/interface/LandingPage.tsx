import React from 'react'
import { getFeaturedProjects, getLandingTechGroups, getLatestPosts, getTestimonials } from '@/modules/landing/application/getLandingData'
// Safe rollback: swap the imports + JSX below to go back to the static hero.
// import { Hero } from './components/Hero'
import { HeroStory } from './components/HeroStory'
import { Philosophy } from './components/Philosophy'
// import { TechStack } from './components/TechStack' // Hardcoded fallback
import { TechStackClient } from './components/TechStack.client'
import { FeaturedProjectsClient } from './components/FeaturedProjects.client'
import { LatestPostsClient } from './components/LatestPosts.client'
import { TestimonialsClient } from './components/Testimonials.client'
import { Contact } from './components/Contact'

/**
 * Landing page composition (server component).
 * Static content lives in the domain layer; CMS data is fetched
 * through application-layer use cases.
 */
export const LandingPage: React.FC = async () => {
    const [projects, posts, techGroups, testimonials] = await Promise.all([
        getFeaturedProjects(6),
        getLatestPosts(3),
        getLandingTechGroups(),
        getTestimonials(),
    ])

    return (
        <main>
            <HeroStory />
            <FeaturedProjectsClient projects={projects} />
            <Philosophy />
            {/* <TechStack /> -- hardcoded fallback */}
            <TechStackClient groups={techGroups} />
            {/* <LatestPostsClient posts={posts} /> */}
            <TestimonialsClient testimonials={testimonials} />
            <Contact />
        </main>
    )
}
