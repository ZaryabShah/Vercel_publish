import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { WhatIDo } from '@/components/what-i-do'
import { CaseStudies } from '@/components/case-studies'
import { CallToAction } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <WhatIDo />
      <CaseStudies />
      <CallToAction />
      <SiteFooter />
    </main>
  )
}
