'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

export const ProgressiveBlur = ({
    className,
    direction = 'left',
    blurIntensity = 2,
    children,
}: {
    className?: string
    direction?: 'left' | 'right'
    blurIntensity?: number
    children?: React.ReactNode
}) => {
    const { scrollYProgress } = useScroll()

    // Map scroll progress (0 to 1) to a blur value (e.g., 0px to 20px)
    const blur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100 * blurIntensity])

    // Determine the gradient direction
    const gradientDirection = direction === 'left' ? 'to right' : 'to left'

    return (
        <motion.div
            style={
                {
                    '--blur': blur.get(),
                    maskImage: `linear-gradient(${gradientDirection}, transparent, black 40%, black 100%)`,
                    WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent, black 40%, black 100%)`,
                    backdropFilter: `blur(calc(var(--blur) * 1px))`,
                } as React.CSSProperties
            }
            className={cn('pointer-events-none absolute inset-0 z-20', className)}>
            {children}
        </motion.div>
    )
}
