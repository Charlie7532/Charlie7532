'use client'

import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import type { Post } from '@/payload-types'
import { formatDateTime } from '@/utilities/formatDateTime'
import { Reveal, SectionHeading } from './primitives'

export type LatestPostItem = Pick<Post, 'id' | 'title' | 'slug' | 'meta' | 'publishedAt'>

type Props = {
    posts: LatestPostItem[]
}

const PostRow: React.FC<{ post: LatestPostItem; index: number }> = ({ post, index }) => {
    const reduce = useReducedMotion()

    return (
        <Reveal as="li" index={index}>
            <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
                <Link
                    href={`/posts/${post.slug}`}
                    className="neu-raised flex flex-col gap-3 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                    <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold text-foreground">{post.title}</h3>
                        {post.meta?.description && (
                            <p className="mt-1 line-clamp-2 text-sm text-muted">{post.meta.description}</p>
                        )}
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                        {post.publishedAt && (
                            <time
                                dateTime={post.publishedAt}
                                className="neu-chip px-3 py-1 font-mono text-[11px] whitespace-nowrap text-muted"
                            >
                                {formatDateTime(post.publishedAt)}
                            </time>
                        )}
                        <span aria-hidden className="text-muted">
                            →
                        </span>
                    </div>
                </Link>
            </motion.div>
        </Reveal>
    )
}

export const LatestPostsClient: React.FC<Props> = ({ posts }) => {
    if (!posts.length) return null

    return (
        <section id="writing" className="py-20 md:py-28">
            <div className="container max-w-4xl">
                <SectionHeading
                    eyebrow="Writing"
                    title="Latest Posts"
                    subtitle="Notes on agents, product, and building with hybrid teams."
                />
                <ul className="flex flex-col gap-5">
                    {posts.map((post, i) => (
                        <PostRow key={post.id} post={post} index={i} />
                    ))}
                </ul>
                <Reveal className="mt-10 text-center">
                    <Link
                        href="/posts"
                        className="neu-button inline-block rounded-full px-7 py-3 text-sm font-semibold text-foreground"
                    >
                        All posts →
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
