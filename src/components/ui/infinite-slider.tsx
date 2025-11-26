'use client'
import React from 'react'
import { cn } from '@/lib/utils'

export const InfiniteSlider = ({
    children,
    className,
    speed = 50,
    speedOnHover = 20,
    direction = 'left',
    gap = 24,
}: {
    children: React.ReactNode
    className?: string
    speed?: number
    speedOnHover?: number
    direction?: 'left' | 'right'
    gap?: number
}) => {
    const ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (!ref.current) return
        if (!window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
            return
        }

        const scroller = ref.current
        scroller.setAttribute('data-animated', 'true')

        const scrollerContent = scroller.querySelector('[data-slider-content]')
        if (!scrollerContent) return

        const scrollerContentChildren = Array.from(scrollerContent.children)
        scrollerContentChildren.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement
            duplicatedItem.setAttribute('aria-hidden', 'true')
            scrollerContent.appendChild(duplicatedItem)
        })

        if (direction === 'right') {
            scroller.style.setProperty('--_animation-direction', 'reverse')
        } else {
            scroller.style.setProperty('--_animation-direction', 'forwards')
        }
    }, [direction])

    return (
        <div
            ref={ref}
            className={cn(
                'group/slider relative z-10 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,hsl(var(--background))_10%,hsl(var(--background))_90%,transparent_100%)]',
                className
            )}
            style={
                {
                    '--_speed': `${speed}s`,
                    '--_speed-on-hover': `${speedOnHover}s`,
                    '--_gap': `${gap}px`,
                } as React.CSSProperties
            }>
            <div
                data-slider-content
                className="flex w-max flex-nowrap items-center gap-[--_gap] group-data-[animated=true]/slider:animate-slide group-hover/slider:animation-pause">
                {children}
            </div>
        </div>
    )
}
