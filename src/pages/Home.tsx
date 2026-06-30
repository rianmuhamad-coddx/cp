import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Rocket, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/FadeIn'
import { GridBackground } from '@/components/GridBackground'
import { CTA } from '@/components/CTA'

const capabilities = [
  {
    icon: Zap,
    title: 'Build',
    description: 'Visual builder untuk merancang agen AI dengan tools, prompts, dan workflows tanpa code.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Satu klik deploy ke production. Auto-scaling, monitoring, dan rollback built-in.',
  },
  {
    icon: BarChart3,
    title: 'Manage',
    description: 'Observability penuh: logs, traces, cost tracking. Optimize dengan data.',
  },
]

const useCases = [
  {
    tag: 'Customer Support',
    title: 'Resolve tickets autonomously',
    description: 'Agen handle 80% tiket Level-1, escalate yang kompleks, dan belajar dari setiap interaksi.',
  },
  {
    tag: 'Sales',
    title: 'Qualify leads 24/7',
    description: 'Agen sales yang riset, qualify, dan book meeting — tanpa SDR tambahan.',
  },
  {
    tag: 'Operations',
    title: 'Automate back-office',
    description: 'Invoice processing, data entry, reconciliation — semuanya otomatis dan teraudit.',
  },
]

const steps = [
  { number: '01', title: 'Connect', description: 'Hubungkan data sources dan tools Anda. Plug-and-play.' },
  { number: '02', title: 'Configure', description: 'Definisikan behavior agen lewat visual builder tanpa code.' },
  { number: '03', title: 'Scale', description: 'Deploy, monitor, dan optimize ke use case lain.' },
]

const stats = [
  { value: '120+', label: 'Agents deployed' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '45+', label: 'Startups onboard' },
  { value: '0.8s', label: 'Avg response' },
]

const logos = ['Acme AI', 'Vertex', 'Northwind', 'Stellar', 'Quantum', 'Helix', 'Arc', 'Forge']

export default function Home() {
  return (
    <>
      {/* HERO */}
      <GridBackground className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <Badge className="mb-4">Agentic AI Platform</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-6xl">
                AI yang <span className="text-gradient">benar-benar bekerja.</span>{' '}
                Bukan sekadar chatbot.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-xl text-base text-[#a3a3a3] md:text-lg">
                Platform agentic AI untuk startup membangun, deploy, dan mengelola agen AI yang
                bisa berpikir, bertindak, dan berkembang sendiri.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Start Building
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/products">Watch Demo</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Dashboard mockup */}
          <FadeIn delay={0.4} className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#0a0a0a] p-4 md:p-6">
              <div className="mb-4 flex items-center gap-2 border-b border-[#1f1f1f] pb-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffb800]" />
                  <div className="h-3 w-3 rounded-full bg-[#00d4aa]" />
                </div>
                <div className="ml-4 rounded-md bg-[#141414] px-3 py-1 text-xs text-[#737373]">
                  app.mot.ai/dashboard
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {[
                  { label: 'Active Agents', value: '24', change: '+12%' },
                  { label: 'Tasks Completed', value: '1,847', change: '+34%' },
                  { label: 'Avg Response', value: '0.8s', change: '-15%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#1f1f1f] bg-[#141414] p-4"
                  >
                    <div className="text-xs text-[#737373]">{stat.label}</div>
                    <div className="font-display text-2xl font-bold text-[#f5f5f5]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#00d4aa]">{stat.change} this week</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-[#1f1f1f] bg-[#141414] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-[#f5f5f5]">Agent Activity</div>
                    <div className="text-xs text-[#737373]">Last 7 days</div>
                  </div>
                  <div className="flex gap-3 text-xs text-[#737373]">
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#ffb800]" /> Deploy
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-[#404040]" /> Idle
                    </span>
                  </div>
                </div>
                <div className="flex h-24 items-end gap-1.5">
                  {[40, 65, 50, 80, 95, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#ffb800] to-[#ffb800]/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stats row */}
          <FadeIn delay={0.5} className="mt-10">
            <div className="grid grid-cols-2 gap-4 border-t border-[#1f1f1f] pt-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-[#f5f5f5] md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#737373]">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </GridBackground>

      {/* CAPABILITIES */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">Capabilities</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Three pillars. Infinite possibilities.
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((cap, idx) => (
              <FadeIn key={cap.title} delay={idx * 0.1}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#ffb800]/10 text-[#ffb800]">
                      <cap.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#f5f5f5]">{cap.title}</h3>
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-[#a3a3a3]">
                      {cap.description}
                    </p>
                    <Link
                      to="/products"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#ffb800] transition-all hover:gap-2"
                    >
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge className="mb-3">Use Cases</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Built for real-world teams.
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {useCases.map((useCase, idx) => (
              <FadeIn key={useCase.title} delay={idx * 0.1}>
                <Card className="group h-full overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-[#ffb800]/20 to-[#00d4aa]/20" />
                  <CardContent>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#ffb800]">
                      {useCase.tag}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-[#f5f5f5] transition-colors group-hover:text-[#ffb800]">
                      {useCase.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#a3a3a3]">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">How it works</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Idea to production in days.
            </h2>
          </FadeIn>
          <div className="relative grid gap-6 md:grid-cols-3">
            <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-[#262626] to-transparent md:block" />
            {steps.map((step, idx) => (
              <FadeIn key={step.number} delay={idx * 0.1} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#262626] bg-[#141414]">
                    <span className="font-display text-2xl font-bold text-[#ffb800]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#f5f5f5]">{step.title}</h3>
                  <p className="mt-1 text-sm text-[#a3a3a3]">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-10 border-y border-[#1f1f1f]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
              Trusted by ambitious teams
            </p>
          </FadeIn>
          <motion.div
            className="flex overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex animate-marquee gap-12 pr-12">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-xl font-bold text-[#404040]"
                >
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to build AI that works?"
        description="Mulai gratis. Upgrade kapan saja. Tidak perlu kartu kredit untuk trial."
      />
    </>
  )
}
