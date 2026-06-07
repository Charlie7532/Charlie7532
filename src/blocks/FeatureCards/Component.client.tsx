'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Media } from '@/components/Media';
import type { FeatureCardsBlock } from '@/payload-types';

type Props = {
    className?: string;
} & FeatureCardsBlock;

export const FeatureCardsClient: React.FC<Props> = ({
    eyebrow,
    title,
    description,
    features,
    className,
}) => {
    return (
        <section className={className || 'py-12 md:py-16 lg:py-20'}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        {eyebrow && (
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="block text-sm uppercase mb-2 tracking-wide text-[#9E7F5F]"
                            >
                                {eyebrow}
                            </motion.span>
                        )}
                        {title && (
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4"
                            >
                                {title}
                            </motion.h2>
                        )}
                        {description && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg text-gray-600 max-w-2xl mx-auto"
                            >
                                {description}
                            </motion.p>
                        )}
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features?.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {feature.image && (
                                    <div className="relative aspect-3/2 w-full overflow-hidden">
                                        <Media
                                            resource={feature.image}
                                            imgClassName="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col gap-2 p-6">
                                    {feature.title && (
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {feature.title}
                                        </h3>
                                    )}
                                    {feature.description && (
                                        <p className="text-sm leading-6 text-gray-600">
                                            {feature.description}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
