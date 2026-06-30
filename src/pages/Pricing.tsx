import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/FadeIn'
import { GridBackground } from '@/components/GridBackground'
import { CTA } from '@/components/CTA'
import { Accordion } from '@/components/ui/accordion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Untuk solo founders yang baru mulai eksplorasi AI agent.',
    monthlyPrice: '$0',
    annualPrice: '$0',
    cta: 'Get Started Free',
    variant: 'outline' as const,
    features: [
      '1 agent aktif',
      '1,000 eksekusi/bulan',
      'Visual builder dasar',
      'Community support',
      'OpenAI & Anthropic models',
    ],
  },
  {
    name: 'Growth',
    description: 'Untuk startup yang sudah production dan butuh scale.',
    monthlyPrice: '$99',
    annualPrice: '$79',
    cta: 'Start 14-day Trial',
    variant: 'default' as const,
    popular: true,
    features: [
      '10 agents aktif',
      '50,000 eksekusi/bulan',
      'Advanced builder + A/B testing',
      'Priority email support',
      'All LLM providers + BYO',
      'Full observability suite',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Untuk organisasi dengan kebutuhan custom dan compliance ketat.',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    cta: 'Contact Sales',
    variant: 'white' as const,
    features: [
      'Unlimited agents',
      'Custom eksekusi volume',
      'Self-hosted deployment',
      '24/7 dedicated support + SLA',
      'SOC 2 + custom compliance',
      'SSO, RBAC, audit logs',
    ],
  },
]

const comparison = [
  { feature: 'Active agents', starter: '1', growth: '10', enterprise: 'Unlimited' },
  { feature: 'Monthly executions', starter: '1,000', growth: '50,000', enterprise: 'Custom' },
  { feature: 'Visual builder', starter: 'Basic', growth: 'Advanced + A/B', enterprise: 'Advanced + A/B' },
  { feature: 'LLM providers', starter: 'OpenAI, Anthropic', growth: 'All + BYO', enterprise: 'All + BYO + Self-host' },
  { feature: 'Observability', starter: 'Basic logs', growth: 'Full suite', enterprise: 'Full + Custom' },
  { feature: 'Support', starter: 'Community', growth: 'Priority email', enterprise: '24/7 dedicated' },
  { feature: 'SSO / RBAC', starter: '—', growth: '—', enterprise: '✓' },
  { feature: 'SOC 2 / Compliance', starter: '—', growth: 'SOC 2 ready', enterprise: 'Custom' },
]

const faqs = [
  {
    question: 'Apakah ada free trial untuk plan berbayar?',
    answer: 'Ya. Growth plan punya 14-day free trial tanpa kartu kredit. Anda bisa eksplor semua fitur premium sebelum commit.',
  },
  {
    question: 'Bagaimana cara hitung "eksekusi"?',
    answer: 'Satu eksekusi = satu full run agen dari trigger sampai output. Multi-step workflow tetap dihitung satu eksekusi, tidak per-step.',
  },
  {
    question: 'Bisa ganti plan kapan saja?',
    answer: 'Tentu. Upgrade atau downgrade kapan saja dari dashboard. Pro-rated charge berlaku untuk upgrade mid-cycle.',
  },
  {
    question: 'Apakah data saya aman?',
    answer: 'Data dienkripsi end-to-end. Kami SOC 2 Type II compliant dan tidak pernah menggunakan data Anda untuk training model. Enterprise plan bisa pakai data residency custom.',
  },
  {
    question: 'Bagaimana LLM cost ditangani?',
    answer: 'LLM API cost (OpenAI, Anthropic, dll) ditagih terpisah by usage, kami pass-through tanpa markup. Dashboard menunjukkan real-time cost per agen.',
  },
  {
    question: 'Bisa self-host MOT?',
    answer: 'Ya, untuk Enterprise plan. Kami deploy MOT ke VPC atau on-premise Anda dengan full kontrol. Tim kami handle setup dan maintenance opsional.',
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <>
      <GridBackground className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <FadeIn>
            <Badge className="mb-4">Pricing</Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl">
              Simple, <span className="text-gradient">transparent pricing.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#a3a3a3] md:text-lg">
              Mulai gratis. Upgrade saat Anda siap. Tidak ada biaya tersembunyi.
            </p>
          </FadeIn>
        </div>
      </GridBackground>

      {/* PRICING CARDS */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 flex justify-center">
            <div className="inline-flex rounded-full border border-[#262626] bg-[#0a0a0a] p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  !isAnnual ? 'bg-[#141414] text-[#f5f5f5] shadow-sm' : 'text-[#737373]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  isAnnual ? 'bg-[#141414] text-[#f5f5f5] shadow-sm' : 'text-[#737373]'
                }`}
              >
                Annual
                <span className="ml-2 rounded-full bg-[#00d4aa]/10 px-2 py-0.5 text-xs text-[#00d4aa]">
                  -20%
                </span>
              </button>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan, idx) => (
              <FadeIn key={plan.name} delay={idx * 0.1}>
                <Card
                  className={`relative h-full ${
                    plan.popular
                      ? 'border-[#ffb800]/50 bg-[#0a0a0a] shadow-lg shadow-[#ffb800]/10'
                      : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffb800] px-3 py-1 text-xs font-semibold text-[#050505]">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="flex h-full flex-col p-6">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#f5f5f5]">{plan.name}</h3>
                      <p className="mt-1 text-sm text-[#737373]">{plan.description}</p>
                    </div>
                    <div className="my-4">
                      <span className="font-display text-4xl font-bold text-[#f5f5f5]">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice !== 'Custom' && (
                        <span className="text-sm text-[#737373]">/bulan</span>
                      )}
                    </div>
                    <Button
                      variant={plan.variant}
                      className={`w-full ${plan.variant === 'white' ? 'bg-[#f5f5f5] text-[#050505] hover:bg-[#e5e5e5]' : ''}`}
                      asChild
                    >
                      <Link to="/contact">{plan.cta}</Link>
                    </Button>
                    <ul className="mt-5 space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00d4aa]" />
                          <span dangerouslySetInnerHTML={{ __html: feature.replace(/(Unlimited|Custom|\d+ agents?|\d+,?\d* eksekusi)/, '<strong class="text-[#f5f5f5]">$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">Compare</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              All plans, side by side.
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] overflow-hidden rounded-2xl border border-[#262626] bg-[#050505] text-sm">
                <thead>
                  <tr className="border-b border-[#262626]">
                    <th className="p-4 text-left font-display font-bold text-[#f5f5f5]">Feature</th>
                    <th className="p-4 text-center font-display font-bold text-[#f5f5f5]">Starter</th>
                    <th className="bg-[#ffb800]/5 p-4 text-center font-display font-bold text-[#ffb800]">Growth</th>
                    <th className="p-4 text-center font-display font-bold text-[#f5f5f5]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={row.feature} className={idx !== comparison.length - 1 ? 'border-b border-[#262626]' : ''}>
                      <td className="p-4 font-medium text-[#f5f5f5]">{row.feature}</td>
                      <td className="p-4 text-center text-[#a3a3a3]">{row.starter}</td>
                      <td className="bg-[#ffb800]/5 p-4 text-center font-medium text-[#f5f5f5]">{row.growth}</td>
                      <td className="p-4 text-center text-[#f5f5f5]">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge className="mb-3">FAQ</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Common questions.
            </h2>
          </FadeIn>
          <FadeIn>
            <Accordion items={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Still have questions?"
        description="Tim kami siap bantu pilih plan yang tepat untuk use case Anda."
        primaryAction={{ label: 'Talk to Us', href: '/contact' }}
      />
    </>
  )
}
