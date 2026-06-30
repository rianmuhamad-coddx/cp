import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Accordion } from '@/components/ui/accordion'
import { FadeIn } from '@/components/FadeIn'
import { GridBackground } from '@/components/GridBackground'
import { CTA } from '@/components/CTA'
import { TwitterIcon, LinkedInIcon, GitHubIcon } from '@/components/SocialIcons'
import { Mail, MapPin, Globe, Clock, ArrowRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@mot.ai',
    href: 'mailto:hello@mot.ai',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    content: 'Jl. Sudirman Kav. 28\nJakarta Selatan 12920, Indonesia',
  },
  {
    icon: Globe,
    title: 'Regional Office',
    content: '79 Robinson Road\nSingapore 068897',
  },
  {
    icon: Clock,
    title: 'Jam operasional',
    content: 'Senin – Jumat\n09.00 – 18.00 WIB',
  },
]

const socialLinks = [
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: GitHubIcon, label: 'GitHub', href: '#' },
]

const faqs = [
  {
    question: 'Berapa lama tim MOT membalas inquiry?',
    answer: 'Kami biasanya membalas dalam 1 hari kerja. Untuk inquiry enterprise, tim sales kami akan langsung menjadwalkan call.',
    defaultOpen: true,
  },
  {
    question: 'Apakah saya bisa request demo?',
    answer: 'Tentu. Pilih topik "Sales & Demo" di form, dan tim kami akan menghubungi Anda untuk menjadwalkan sesi demo 30 menit.',
  },
  {
    question: 'Di mana lokasi kantor MOT?',
    answer: 'Kantor pusat kami di Jakarta, dengan regional office di Singapore. Tim kami bekerja remote-first dan tersebar di beberapa kota.',
  },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 5000)
    }, 800)
  }

  return (
    <>
      <GridBackground className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <FadeIn>
            <Badge className="mb-4">Contact</Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl">
              Let's build something <span className="text-gradient">extraordinary.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#a3a3a3] md:text-lg">
              Punya pertanyaan soal pricing, demo, atau partnership? Tim kami siap bantu — biasanya
              membalas dalam satu hari kerja.
            </p>
          </FadeIn>
        </div>
      </GridBackground>

      {/* CONTACT SECTION */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-display text-xl font-bold text-[#f5f5f5]">Send us a message</h2>
                  <p className="mt-1 text-sm text-[#737373]">
                    Isi form di bawah dan tim kami akan menghubungi Anda secepatnya.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
                          Nama lengkap <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <Input placeholder="Budi Santoso" required />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
                          Email <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <Input type="email" placeholder="budi@company.com" required />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
                          Perusahaan
                        </label>
                        <Input placeholder="Nama startup" />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
                          Topik <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <select
                          required
                          className="flex h-11 w-full rounded-xl border border-[#262626] bg-[#0a0a0a] px-4 py-2 text-sm text-[#f5f5f5] focus:border-[#ffb800] focus:outline-none focus:ring-1 focus:ring-[#ffb800]/20"
                        >
                          <option value="" disabled selected>
                            Pilih topik
                          </option>
                          <option value="sales">Sales & Demo</option>
                          <option value="support">Support Teknis</option>
                          <option value="partnership">Partnership</option>
                          <option value="careers">Karir</option>
                          <option value="other">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-[#f5f5f5]">
                        Pesan <span className="text-[#ff6b6b]">*</span>
                      </label>
                      <Textarea
                        rows={5}
                        placeholder="Ceritakan sedikit tentang use case Anda..."
                        required
                      />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                      <ArrowRight className="h-4 w-4" />
                    </Button>

                    {success && (
                      <div className="rounded-xl border border-[#00d4aa]/30 bg-[#00d4aa]/10 p-4 text-sm text-[#00d4aa]">
                        Pesan Anda berhasil dikirim! Kami akan membalas secepatnya.
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Info */}
            <div className="space-y-5 lg:col-span-2">
              <FadeIn delay={0.1}>
                <h3 className="font-display text-lg font-bold text-[#f5f5f5]">
                  Cara lain menghubungi kami
                </h3>
              </FadeIn>

              {contactInfo.map((info, idx) => (
                <FadeIn key={info.title} delay={0.15 + idx * 0.05}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#ffb800]/10 text-[#ffb800]">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-[#f5f5f5]">{info.title}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-[#a3a3a3] transition-colors hover:text-[#ffb800]"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-sm text-[#a3a3a3]">{info.content}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.35}>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] bg-[#0a0a0a] text-[#a3a3a3] transition-colors hover:border-[#ffb800] hover:text-[#ffb800]"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <FadeIn className="mb-8 text-center">
            <Badge variant="secondary" className="mb-3">FAQ</Badge>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#f5f5f5] md:text-3xl">
              Pertanyaan umum.
            </h2>
          </FadeIn>
          <FadeIn>
            <Accordion items={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTA
        title="Not a form person?"
        description="Booking langsung sesi 15 menit dengan tim kami melalui Calendly."
        primaryAction={{ label: 'Book a Call', href: '/contact' }}
      />
    </>
  )
}
