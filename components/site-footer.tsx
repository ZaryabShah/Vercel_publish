import { Mail, Briefcase } from 'lucide-react'
import type { SVGProps } from 'react'

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  )
}

const socials = [
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01a21d5c58f0c832d8',
    icon: Briefcase,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zaryab-haider-8b7442372/',
    icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/zaryabshah',
    icon: GitHubIcon,
  },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold tracking-tight">zaryab.dev</p>
          <a
            href="mailto:zaryabhaider888@gmail.com"
            className="mt-4 inline-flex items-center gap-2 text-lg font-medium transition-colors hover:text-accent"
          >
            <Mail className="size-5 text-accent" aria-hidden="true" />
            zaryabhaider888@gmail.com
          </a>
        </div>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-muted-foreground md:text-left">
          © 2025 Zaryab Haider — All data samples anonymised and compliant.
        </p>
      </div>
    </footer>
  )
}
