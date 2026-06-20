'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { Download, FileText } from 'lucide-react'
import { caseStudies, type CaseStudy } from '@/lib/case-studies'
import { FadeIn } from '@/components/motion-primitives'

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, x: reversed ? 64 : -64 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card p-5 md:grid-cols-2 md:p-7"
    >
      <div className={reversed ? 'md:order-2' : ''}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border">
          <Image
            src={study.image || '/placeholder.svg'}
            alt={`${study.title} — ${study.client}`}
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className={reversed ? 'md:order-1' : ''}>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{study.client}</p>
        <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight md:text-3xl">
          {study.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted-foreground">{study.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {study.metrics.map((metric) => (
            <li
              key={metric}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
            >
              {metric}
            </li>
          ))}
        </ul>

        {study.csvLink ? (
          <a
            href={study.csvLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden="true" />
            Download sample CSV
          </a>
        ) : study.note ? (
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <FileText className="size-4 text-accent" aria-hidden="true" />
            {study.note}
          </p>
        ) : null}
      </div>
    </motion.article>
  )
}

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:py-32"
    >
      <FadeIn>
        <p className="font-mono text-sm uppercase tracking-widest text-accent">Case Studies</p>
        <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Pipelines shipped at scale
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          A selection of production scrapers and reverse-engineered APIs delivering clean data to
          clients across ticketing, e-commerce, fintech, and recruitment.
        </p>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-10">
        {caseStudies.map((study, index) => (
          <CaseCard key={study.title} study={study} index={index} />
        ))}
      </div>
    </section>
  )
}
