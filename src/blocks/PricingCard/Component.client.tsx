"use client"

import { cn } from "@/utilities/ui"
import { motion } from "framer-motion"
import React from "react"
import { Card, CardBody, Button, Chip, Link } from "@heroui/react"
import * as LucideIcons from "lucide-react";
import type { PricingCard as PricingCardProps } from "@/payload-types"

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99] as const,
        },
    },
}

// type PricingCardProps = {
//     icon: string,
//     price: number;
//     title: string;
//     subtitle?: string | null;
//     description: string;
//     callToAction: {
//         link: string;
//         text: string;
//         external?: boolean | null;
//     };
//     highlight?: boolean | null;
//     highlightLabel?: string | null;
// }

type Props = {
    className?: string,
    disableAnimation?: boolean,
} & PricingCardProps

export const PricingCardClient: React.FC<Props> = ({ className, callToAction, description: shortDescription, icon, price, title, highlight, highlightLabel, subtitle, disableAnimation }) => {

    const Icon = (LucideIcons as any)[icon] as React.ComponentType<{ className?: string; size?: number }>;

    const MotionWrapper = disableAnimation ? 'div' : motion.div;
    const motionProps = disableAnimation ? {} : { variants: cardVariants };

    return <MotionWrapper key={title} className={cn(className)} {...motionProps}>
        <div className="relative">
            {
                highlight && highlightLabel && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Chip
                            // color="primary"
                            variant="solid"
                            size="sm"
                            className="text-xs px-3 py-1 bg-[#C4A78A] text-white"
                        >
                            {highlightLabel}
                        </Chip>
                    </div>
                )
            }
            <Card className={cn("h-full mt-4 rounded-xl", { "ring-2 ring-[#C4A78A] shadow-xl": highlight, "shadow-lg ring-1 ring-gray-200": !highlight })}>
                <CardBody className="p-6 text-center flex flex-col h-full">
                    <div className="flex-grow">
                        <div className="mb-4">
                            <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                {Icon && <Icon className="text-[#C4A78A]" size={32} />}
                            </div>
                            <Chip
                                // color={highlight ? "primary" : "default"}
                                variant="solid"
                                size="lg"
                                className={cn("text-base mb-3", { "bg-[#C4A78A] text-white": highlight, "bg-gray-300": !highlight })}
                            >
                                ${price}
                            </Chip>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-sm text-[#C4A78A] font-medium mb-3">{subtitle}</p>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{shortDescription}</p>
                    </div>

                    <div className="mt-auto">
                        <Button
                            // color={highlight ? "primary" : "default"}
                            variant={highlight ? "solid" : "flat"}
                            // size="sm"
                            className={cn("w-full rounded-xl text-xs transition-colors ease-in", { "bg-[#C4A78A] text-white hover:bg-[#DFCBB4]": highlight, "bg-gray-100 hover:text-gray-500": !highlight })}
                            as={Link}
                            href={callToAction.link}
                        >
                            {callToAction.text}
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    </MotionWrapper>
}