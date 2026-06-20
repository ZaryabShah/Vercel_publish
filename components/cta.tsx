'use client'

import { motion } from 'motion/react'
import { Rocket } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives'

export function CallToAction() {
  return (
    <section className="px-5 py-24 md:py-32">
      <FadeIn className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-[oklch(0.26_0.07_262)] to-card px-6 py-16 text-center md:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:radial-gradient(oklch(0.7_0.13_215/_0.5)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <h2 className="relative text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Need data from a site that fights back?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Let&apos;s talk through your scraping challenge and map out a reliable pipeline — no
            obligation.
          </p>

          <motion.a
            href="http://calendly.com/zaryabhaider888"
            target="_blank"
            rel="noreferrer"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="relative mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25"
          >
            <Rocket className="size-5" aria-hidden="true" />
            Book a Free 15-Minute Scraping Assessment
          </motion.a>
        </div>
      </FadeIn>
    </section>
  )
}
