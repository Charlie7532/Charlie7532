/**
 * Landing page domain content.
 * Pure data — no framework imports. Edit here to update landing copy.
 */

export type RotatingHeadline = {
    prefix: string
    phrases: string[]
}

export const heroContent = {
    greeting: "Hi, I'm Juan Carlos",
    headline: {
        prefix: 'I build',
        phrases: [
            'AI agents that ship to production',
            'digital product experiences',
            'teams where humans & AI work as one',
            'fullstack platforms end-to-end',
        ],
    } satisfies RotatingHeadline,
    subtitle:
        'AI Product & Tech Lead — designing agent architectures, orchestrating tools and evals, and owning the technical roadmap from idea to production. Leading engineers and AI agents on the same team.',
    location: 'Orlando, Florida, United States',
    photo: '/photos/image.png',
    ctas: {
        primary: { label: 'See my work', href: '#recent-work' },
        secondary: { label: 'Get in touch', href: '#contact' },
    },
} as const

export const statsContent = [
    { value: 30, suffix: '+', label: 'Shipped Projects' },
    { value: 20, suffix: '+', label: 'Happy Clients' },
    { value: 100, suffix: '%', label: 'Production Focus' },
] as const

/**
 * Pinned scroll-story stages: Idea → Architecture → Production.
 * Each stage swaps the narrative panel while the photo stays pinned.
 */
export type StoryStage = {
    key: string
    eyebrow: string
    title: string
    description: string
    /** Lines rendered inside the stage's visual panel */
    panelLines: string[]
    /** Stage visual shown in the pinned frame (replace with AI-generated art later) */
    image: string
    imageAlt: string
}

export const heroStoryStages: StoryStage[] = [
    {
        key: 'idea',
        eyebrow: '01 · The Idea',
        title: 'Every product starts ambiguous',
        description:
            'A rough problem, a sketch, a hypothesis. I take ambiguous problems and give them shape — scoping what matters and cutting what does not.',
        panelLines: ['~ problem: leads are lost', '~ sketch: visualize the job', '~ hypothesis: seeing = closing'],
        image: '/photos/stages/idea.svg',
        imageAlt: 'Sketch of an idea forming — lightbulb over rough wireframes',
    },
    {
        key: 'architecture',
        eyebrow: '02 · The Architecture',
        title: 'Agents, tools & evals — designed as a system',
        description:
            'I design the agent architecture: orchestration, tool contracts, eval loops. Humans and AI agents on the same team, each doing what they do best.',
        panelLines: ['user → agent → tools', 'evals: gating every release', 'humans: in the loop, by design'],
        image: '/photos/stages/architecture.svg',
        imageAlt: 'Agent architecture diagram — user, agent, tools, memory, evals, ship',
    },
    {
        key: 'production',
        eyebrow: '03 · Production',
        title: 'Shipped, tested, running',
        description:
            'Not a prototype — a system users rely on. Architecture and DevOps ownership to keep it fast, observable and alive.',
        panelLines: ['deploy: green ✓', 'evals: passing ✓', 'users: converting ✓'],
        image: '/photos/stages/production.svg',
        imageAlt: 'Production dashboard — deploys green, evals passing, users converting',
    },
]

export const philosophyContent = {
    title: 'Humans + AI, one team',
    paragraphs: [
        'I lead at the intersection of AI engineering and product: building agentic systems, LLM-powered tools, and fullstack platforms that ship.',
        'As Tech Lead and CTO-cofounder, I design agent architectures, orchestrate tools and evals, and own the technical roadmap from idea to production — leading both engineers and AI agents on the same team.',
        'I turn ambiguous problems into shipped, user-tested systems — with the architecture and DevOps ownership to keep them running.',
    ],
    pillars: [
        {
            title: 'Agent Architectures',
            description: 'Orchestration, tools, evals — agentic systems designed for production, not demos.',
        },
        {
            title: 'Product Experiences',
            description: 'Digital products where the AI feels natural, not bolted on.',
        },
        {
            title: 'Hybrid Teams',
            description: 'Engineers and AI agents working the same backlog, with the process to keep quality high.',
        },
    ],
} as const

export const techStackContent = {
    title: 'Capabilities',
    subtitle: 'The toolbox I reach for, from agent runtime to pixel.',
} as const

export const contactContent = {
    title: "Let's build something that ships",
    subtitle:
        'Open to leading AI product teams, agentic platform builds, and ambitious digital experiences.',
    email: 'jcarlosbotero@gmail.com',
    linkedin: 'https://www.linkedin.com/in/juan-carlos-botero-3b202a6b/',
    github: 'https://github.com/Charlie7532',
} as const
