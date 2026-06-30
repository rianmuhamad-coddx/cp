import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/FadeIn'
import { GridBackground } from '@/components/GridBackground'
import { CTA } from '@/components/CTA'
import { Zap, Eye, Heart, Award } from 'lucide-react'

const values = [
  { icon: Zap, title: 'Mission', text: 'Mendemokratisasi akses ke AI agent yang benar-benar otonom, supaya setiap startup bisa bersaing dengan perusahaan besar.' },
  { icon: Eye, title: 'Vision', text: 'Dunia di mana AI agent adalah rekan kerja default — tools setiap founder, bukan privilese perusahaan besar.' },
  { icon: Heart, title: 'Values', text: 'Ship fast & real, builder-first, dan trust by default. Security adalah fitur, bukan afterthought.' },
]

const timeline = [
  { period: 'Q1 2024', title: 'Founded', text: 'MOT didirikan di Jakarta oleh tiga engineer yang frustrasi dengan kompleksitas MLOps.' },
  { period: 'Q2 2024', title: 'Pre-Seed', text: 'Raise $500K dari angel investors dan Y Combinator. Mulai build MVP.' },
  { period: 'Q4 2024', title: 'Public Launch', text: 'Platform MOT v1 rilis. 10 startup pertama onboard dalam minggu pertama.' },
  { period: 'Q2 2025', title: 'Seed Round', text: '$5M dari Sequoia Southeast Asia. Tim berkembang jadi 18 orang. Buka Singapore office.' },
  { period: 'Q1 2026', title: 'Today', text: '45+ startup aktif, 120+ agents deployed, support 24/7. Dan baru mulai.' },
]

const team = [
  { initials: 'RA', name: 'Rian Akbar', role: 'Co-Founder & CEO', bio: 'Ex-Gojek, Ex-Bukalapak. Built ML infra for 10M+ users.' },
  { initials: 'SH', name: 'Sarah Halim', role: 'Co-Founder & CTO', bio: 'PhD CS Stanford. Former research engineer at Anthropic.' },
  { initials: 'DW', name: 'Dimas Wibowo', role: 'Co-Founder & CPO', bio: 'Ex-Product Lead Tokopedia. Shipped 0-to-1 products.' },
  { initials: 'AN', name: 'Anita Novi', role: 'VP Engineering', bio: '10+ years building distributed systems at scale.' },
  { initials: 'BS', name: 'Budi Santoso', role: 'Head of AI Research', bio: 'Published 12 papers on agentic systems.' },
  { initials: 'LP', name: 'Linda Putri', role: 'Head of Design', bio: 'Former design lead at Canva. Loves brutalist design.' },
  { initials: 'RF', name: 'Rio Fernando', role: 'Head of GTM', bio: 'Built sales teams at 3 prior startups. 1 exit.' },
  { initials: '+', name: 'And many more', role: 'Join us', bio: 'Hiring across engineering, design, GTM.' },
]

export default function About() {
  return (
    <>
      <GridBackground className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <FadeIn>
              <Badge className="mb-4">About MOT</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl">
                We build AI that <span className="text-gradient">thinks, acts, and evolves.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-xl text-base text-[#a3a3a3] md:text-lg">
                MOT didirikan dengan satu keyakinan: setiap startup berhak punya AI yang benar-benar
                bekerja — bukan sekadar chatbot yang menjawab FAQ.
              </p>
            </FadeIn>
          </div>
        </div>
      </GridBackground>

      {/* STORY */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="secondary" className="mb-3">Our Story</Badge>
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
                Dimulai dari frustrasi, jadi misi.
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#a3a3a3] md:text-base">
                <p>
                  MOT lahir di 2024 dari pengalaman pribadi founder kami yang berulang kali menemui
                  masalah yang sama: membangun AI agent yang benar-benar useful itu susah.
                </p>
                <p>
                  Kami percaya itu salah. Startup harus bisa fokus pada masalah pengguna mereka,
                  bukan pada cara deploy LLM ke Kubernetes.
                </p>
                <p>
                  Hari ini, puluhan startup mempercayai MOT untuk menjalankan agen AI mereka di
                  production — dari support ticket automation sampai sales qualification.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative rounded-3xl border border-[#262626] bg-[#0a0a0a] p-8 md:p-10">
                <div className="bg-grid absolute inset-0 opacity-50" />
                <div className="relative text-center">
                  <div className="font-display text-6xl font-bold text-[#f5f5f5] md:text-8xl">
                    2024
                  </div>
                  <div className="mt-2 font-display text-lg font-semibold text-[#ffb800]">
                    Founded in Jakarta
                  </div>
                  <div className="text-sm text-[#737373]">with a mission to democratize AI agents</div>
                </div>
                <div className="absolute -bottom-4 -right-4 max-w-[180px] rounded-2xl border border-[#262626] bg-[#141414] p-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#ffb800]" />
                    <span className="text-xs font-semibold text-[#f5f5f5]">Y Combinator W24</span>
                  </div>
                  <p className="mt-1 text-xs text-[#737373]">Backed by leading AI investors</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">What drives us</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Mission, vision, values.
            </h2>
          </FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((item, idx) => (
              <FadeIn key={item.title} delay={idx * 0.1}>
                <Card className="h-full">
                  <CardContent>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#00d4aa]/10 text-[#00d4aa]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#f5f5f5]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#a3a3a3]">{item.text}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge className="mb-3">Our Journey</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              From idea to 45+ startups.
            </h2>
          </FadeIn>
          <div className="relative space-y-6">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#262626] to-transparent md:left-1/2 md:-translate-x-1/2" />
            {timeline.map((item, idx) => (
              <FadeIn key={item.period} delay={idx * 0.1}>
                <div className={`relative flex items-center gap-6 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden flex-1 md:block" />
                  <div className="absolute left-4 z-10 h-3 w-3 rounded-full border-2 border-[#050505] bg-[#ffb800] md:left-1/2 md:-translate-x-1/2" />
                  <div className="ml-12 flex-1 md:ml-0 md:px-8">
                    <div className="text-xs font-semibold text-[#ffb800]">{item.period}</div>
                    <h3 className="font-display text-lg font-bold text-[#f5f5f5]">{item.title}</h3>
                    <p className="text-sm text-[#a3a3a3]">{item.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">Our Team</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Built by builders, for builders.
            </h2>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <FadeIn key={member.name} delay={idx * 0.05}>
                <Card className="text-center">
                  <CardContent>
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ffb800] to-[#ff8a00] font-display text-lg font-bold text-[#050505]">
                      {member.initials}
                    </div>
                    <h3 className="font-display text-base font-bold text-[#f5f5f5]">{member.name}</h3>
                    <p className="text-xs font-medium text-[#ffb800]">{member.role}</p>
                    <p className="mt-1 text-xs text-[#737373]">{member.bio}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Mau kenalan lebih dekat?"
        description="Kami selalu terbuka untuk ngobrol dengan founders, engineers, atau siapa pun yang passionate soal AI."
        primaryAction={{ label: 'Get in touch', href: '/contact' }}
      />
    </>
  )
}
