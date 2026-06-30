import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/FadeIn'

interface CTAProps {
  title: string
  description: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function CTA({
  title,
  description,
  primaryAction = { label: 'Start Building', href: '/contact' },
  secondaryAction = { label: 'Talk to Sales', href: '/contact' },
}: CTAProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-[#262626] bg-[#0a0a0a] p-8 text-center md:p-12">
            <div className="bg-grid absolute inset-0 opacity-50" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffb800]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#00d4aa]/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-[#a3a3a3]">{description}</p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild>
                  <Link to={primaryAction.href}>
                    {primaryAction.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
