'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { BadgeCheck, Database, Gauge } from 'lucide-react'

const badges = [
  { icon: BadgeCheck, label: 'Top-Rated Plus on Upwork' },
  { icon: Database, label: '20M+ records/day' },
  { icon: Gauge, label: '99%+ success rate' },
]

const tagline =
  "Large-scale web scraping & API reverse engineering that works even when the site doesn't want to be scraped."

function TypingTagline() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= tagline.length) return
    const id = setTimeout(() => setCount((c) => c + 1), 22)
    return () => clearTimeout(id)
  }, [count])

  return (
    <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
      {tagline.slice(0, count)}
      <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 animate-pulse bg-accent align-middle md:h-6" />
    </p>
  )
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[oklch(0.22_0.06_262)] via-background to-background"
    >
      {/* subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(to_right,oklch(0.6_0.1_250/_0.25)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.6_0.1_250/_0.25)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
      />

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 pb-20 pt-32 md:pt-40">
        <motion.span
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 font-mono text-xs text-accent"
        >
          <span className="size-2 rounded-full bg-accent" />
          Freelance Data Engineer · Available for new projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, x: -48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          Zaryab Haider
        </motion.h1>

        <TypingTagline />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground"
            >
              <Icon className="size-4 text-accent" aria-hidden="true" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
