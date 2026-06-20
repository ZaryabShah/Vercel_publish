'use client'

import { motion } from 'motion/react'
import { Database, Globe, Target } from 'lucide-react'
import { CountUp, FadeIn } from '@/components/motion-primitives'

const stats = [
  {
    icon: Database,
    value: 20,
    suffix: 'M+',
    label: 'records daily',
  },
  {
    icon: Globe,
    value: 50,
    suffix: '+',
    label: 'complex sites',
  },
  {
    icon: Target,
    value: 99.5,
    suffix: '%',
    decimals: 1,
    label: 'avg success rate',
  },
]

export function WhatIDo() {
  return (
    <section id="what-i-do" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32">
      <FadeIn>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">What I Do</p>
        <p className="mt-6 max-w-4xl text-balance text-2xl font-medium leading-snug md:text-3xl">
          I build data pipelines that collect millions of records daily from heavily protected
          websites{' '}
          <span className="text-muted-foreground">(Cloudflare, DataDome, Akamai)</span> and reverse
          engineer private/mobile APIs to deliver clean, structured data —{' '}
          <span className="text-accent">on time, every time.</span>
        </p>
      </FadeIn>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.5,
              delay: i * 0.12,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="rounded-2xl border border-border bg-card p-7"
          >
            <stat.icon className="size-7 text-primary" aria-hidden="true" />
            <div className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
            </div>
            <p className="mt-2 text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
