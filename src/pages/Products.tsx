import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/FadeIn'
import { GridBackground } from '@/components/GridBackground'
import { CTA } from '@/components/CTA'
import { Check, Shield } from 'lucide-react'

const features = [
  {
    badge: 'Visual Builder',
    title: 'Drag, drop, deploy. No code required.',
    description: 'Rancang agen AI Anda dengan visual canvas yang intuitif. Definisikan tools, prompts, conditional flows, dan approval gates tanpa code.',
    points: ['Node-based workflow editor', 'Prompt versioning & A/B testing', 'Reusable component library'],
    visual: 'workflow',
  },
  {
    badge: 'Auto-Scaling Infra',
    title: 'From 10 to 10 million requests. Same config.',
    description: 'Infrastruktur kami auto-scale berdasarkan traffic real-time. Bayar sesuai pemakaian, tanpa over-provision.',
    points: ['99.9% uptime SLA', 'Multi-region deployment', 'Pay-per-use pricing'],
    visual: 'chart',
  },
  {
    badge: 'Full Observability',
    title: 'See every decision your agent makes.',
    description: 'Traces lengkap, logs terstruktur, cost breakdown per-agen. Tahu persis apa yang agen pikirkan dan gagal.',
    points: ['Step-by-step execution traces', 'Token usage & cost analytics', 'Custom evaluation pipelines'],
    visual: 'trace',
  },
  {
    badge: 'Bring Your Own Model',
    title: 'OpenAI, Anthropic, or your own. No lock-in.',
    description: 'Switch model dengan satu klik. A/B test antar model. Pakai self-hosted LLM kalau perlu.',
    points: ['Native support GPT-4, Claude, Gemini', 'BYO endpoint untuk custom models', 'Cost optimization otomatis'],
    visual: 'models',
  },
]

const models = [
  { name: 'OpenAI', detail: 'GPT-4o, GPT-4', color: 'from-black to-neutral-800' },
  { name: 'Anthropic', detail: 'Claude 3.5', color: 'from-orange-500 to-amber-500' },
  { name: 'Google', detail: 'Gemini Pro', color: 'from-blue-500 to-cyan-500' },
  { name: 'Meta', detail: 'Llama 3.1', color: 'from-indigo-500 to-violet-500' },
  { name: 'Mistral', detail: 'Mixtral, 7B', color: 'from-red-500 to-rose-500' },
  { name: 'Your own', detail: 'BYO endpoint', color: 'from-[#ffb800] to-[#ff8a00]' },
]

const integrations = [
  'Slack', 'Linear', 'Notion', 'HubSpot', 'Stripe', 'Intercom',
  'GitHub', 'Zendesk', 'Postgres', 'Airtable', 'Figma', '100+ more',
]

const securityItems = [
  'SOC 2 Type II',
  'End-to-end encryption',
  'Data residency',
  'SSO & RBAC',
]

function WorkflowVisual() {
  return (
    <div className="space-y-3">
      {[
        { label: 'TRIGGER', text: 'New ticket in Intercom', color: 'bg-[#ffb800]' },
        { label: 'AGENT', text: 'Classify intent → Search KB → Draft reply', color: 'bg-[#8b5cf6]' },
        { label: 'ACTION', text: 'Send reply → Log to CRM', color: 'bg-[#00d4aa]' },
      ].map((step) => (
        <div key={step.label} className="rounded-xl border border-[#262626] bg-[#141414] p-3">
          <div className="mb-1 flex items-center gap-2">
            <div className={`h-2 w-2 rounded-full ${step.color}`} />
            <span className="text-[10px] font-semibold tracking-wider text-[#737373]">
              {step.label}
            </span>
          </div>
          <div className="text-sm text-[#f5f5f5]">{step.text}</div>
        </div>
      ))}
    </div>
  )
}

function ChartVisual() {
  return (
    <div className="relative h-full rounded-2xl border border-[#262626] bg-[#0a0a0a] p-5">
      <div className="flex items-center justify-between text-xs text-[#737373]">
        <span>REQUESTS/SEC</span>
        <span className="text-[#00d4aa]">● LIVE</span>
      </div>
      <div className="mt-3 font-display text-4xl font-bold text-[#f5f5f5]">2,847</div>
      <div className="mt-4 flex items-end gap-1 h-20">
        {[30, 45, 60, 75, 85, 95, 100].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-[#ffb800] to-[#ffb800]/50"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
        {[
          { label: 'Latency p95', value: '340ms' },
          { label: 'Error rate', value: '0.02%', color: 'text-[#00d4aa]' },
          { label: 'Region', value: 'SG-1' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-[#737373]">{s.label}</div>
            <div className={`font-display font-bold text-[#f5f5f5] ${s.color || ''}`}>{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TraceVisual() {
  const logs = [
    { type: 'AGENT', text: 'Started: support-ticket-agent', color: 'border-[#ffb800] text-[#ffb800]' },
    { type: 'LLM', text: 'Classified intent: "refund_request" (0.94)', color: 'border-[#8b5cf6] text-[#8b5cf6]' },
    { type: 'TOOL', text: 'lookup_order(id=12345) → 234ms', color: 'border-[#ffb800] text-[#ffb800]' },
    { type: 'LLM', text: 'Drafted reply (312 tokens, $0.0023)', color: 'border-[#8b5cf6] text-[#8b5cf6]' },
    { type: 'SENT', text: 'Reply delivered via Intercom', color: 'border-[#00d4aa] text-[#00d4aa]' },
  ]
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-[#262626] bg-[#141414] p-4 font-mono text-[10px]">
      <div className="mb-2 text-[#737373]">2026-06-30 14:23:01 UTC</div>
      <div className="space-y-2">
        {logs.map((log) => (
          <div key={log.text} className={`rounded border-l-2 bg-[#0a0a0a] p-2 ${log.color}`}>
            <span className="font-semibold">{log.type}</span>{' '}
            <span className="text-[#a3a3a3]">{log.text}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-[#737373]">Total: 1.2s · 4 steps · $0.0028</div>
    </div>
  )
}

function ModelVisual() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {models.map((m) => (
        <div
          key={m.name}
          className="rounded-2xl border border-[#262626] bg-[#0a0a0a] p-4 text-center card-hover"
        >
          <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${m.color} font-bold text-white`}>
            {m.name[0]}
          </div>
          <div className="text-sm font-semibold text-[#f5f5f5]">{m.name}</div>
          <div className="text-xs text-[#737373]">{m.detail}</div>
        </div>
      ))}
    </div>
  )
}

const visuals: Record<string, React.ReactNode> = {
  workflow: <WorkflowVisual />,
  chart: <ChartVisual />,
  trace: <TraceVisual />,
  models: <ModelVisual />,
}

export default function Products() {
  return (
    <>
      <GridBackground className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <Badge className="mb-4">The MOT Platform</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl">
                Everything you need to ship{' '}
                <span className="text-gradient">production AI agents.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-xl text-base text-[#a3a3a3] md:text-lg">
                Satu platform untuk seluruh lifecycle: build dengan visual tools, deploy ke
                infrastruktur kami, monitor dengan observability lengkap.
              </p>
            </FadeIn>
          </div>
        </div>
      </GridBackground>

      {/* FEATURES */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 space-y-12">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <FadeIn className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <Badge variant="secondary" className="mb-3">{feature.badge}</Badge>
                <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
                  {feature.title}
                </h2>
                <p className="mt-3 text-[#a3a3a3]">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-[#f5f5f5]">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00d4aa]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.15} className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                {visuals[feature.visual]}
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge className="mb-3">Integrations</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Connect to your stack.
            </h2>
            <p className="mt-2 text-[#a3a3a3]">100+ integrasi siap pakai. Atau pakai HTTP webhook.</p>
          </FadeIn>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {integrations.map((name, idx) => (
              <FadeIn key={name} delay={idx * 0.03}>
                <Card className="flex aspect-square flex-col items-center justify-center text-center">
                  <CardContent className="p-3">
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#141414] text-[10px] font-bold text-[#ffb800]">
                      {name[0]}
                    </div>
                    <div className="text-xs font-medium text-[#f5f5f5]">{name}</div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-3">Security & Compliance</Badge>
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
                Enterprise-grade security, startup-friendly simplicity.
              </h2>
              <p className="mt-3 text-[#a3a3a3]">
                Dari day one, MOT dirancang dengan security sebagai fitur utama. Data Anda dienkripsi,
                diisolasi, dan diaudit.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {securityItems.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#f5f5f5]">
                    <Shield className="h-4 w-4 text-[#00d4aa]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex aspect-square items-center justify-center rounded-3xl border border-[#262626] bg-[#0a0a0a]">
                <Shield className="h-24 w-24 text-[#ffb800]" strokeWidth={1} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTA
        title="See MOT in action."
        description="Book a 30-minute demo. Kami tunjukkan cara build agen pertama Anda end-to-end."
        primaryAction={{ label: 'Book a Demo', href: '/contact' }}
      />
    </>
  )
}
