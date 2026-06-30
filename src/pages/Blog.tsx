import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/FadeIn'
import { GridBackground } from '@/components/GridBackground'
import { ArrowRight } from 'lucide-react'

const categories = ['all', 'engineering', 'product', 'company', 'tutorials']

const posts = [
  {
    id: 1,
    category: 'engineering',
    title: 'Building reliable AI agents: a practical engineering guide',
    excerpt: 'Pola-pola desain yang kami gunakan di MOT untuk membuat agen AI tetap dapat diprediksi, terukur, dan aman di production.',
    date: 'Jun 28, 2026',
    readTime: '12 min',
    featured: true,
  },
  {
    id: 2,
    category: 'tutorials',
    title: 'Your first AI agent in 15 minutes',
    excerpt: 'Langkah demi langkah membangun agen customer support pertama Anda menggunakan visual builder MOT.',
    date: 'Jun 25, 2026',
    readTime: '8 min',
  },
  {
    id: 3,
    category: 'product',
    title: 'Why we rebuilt our workflow engine',
    excerpt: 'Cerita teknis dan product decision di balik rewrite core workflow engine MOT untuk skala 10x.',
    date: 'Jun 20, 2026',
    readTime: '10 min',
  },
  {
    id: 4,
    category: 'company',
    title: 'MOT raises $5M seed led by Sequoia',
    excerpt: 'Apa artinya funding ini untuk product roadmap dan komunitas startup yang kami dukung.',
    date: 'Jun 15, 2026',
    readTime: '5 min',
  },
  {
    id: 5,
    category: 'engineering',
    title: 'Security patterns for AI agents',
    excerpt: 'Cara kami menerapkan RBAC, audit logs, dan sandboxing untuk agen yang menangani data sensitif.',
    date: 'Jun 10, 2026',
    readTime: '11 min',
  },
  {
    id: 6,
    category: 'tutorials',
    title: 'Connect MOT to your CRM',
    excerpt: 'Panduan lengkap integrasi agen MOT dengan HubSpot, Salesforce, atau custom CRM via webhook.',
    date: 'Jun 5, 2026',
    readTime: '7 min',
  },
  {
    id: 7,
    category: 'product',
    title: 'Observability: know what your agent thinks',
    excerpt: 'Mengapa traces, cost analytics, dan eval pipelines jadi fitur paling penting untuk agen production.',
    date: 'May 30, 2026',
    readTime: '9 min',
  },
  {
    id: 8,
    category: 'company',
    title: 'Life at MOT: our remote-first culture',
    excerpt: 'Bagaimana kami membangun tim yang cepat, otonom, dan tetap human di tengah hype AI.',
    date: 'May 22, 2026',
    readTime: '6 min',
  },
  {
    id: 9,
    category: 'engineering',
    title: 'LLM cost optimization in production',
    excerpt: 'Strategi caching, routing, dan model selection yang mengurangi LLM cost kami hingga 60%.',
    date: 'May 15, 2026',
    readTime: '13 min',
  },
]

const categoryLabels: Record<string, string> = {
  all: 'All',
  engineering: 'Engineering',
  product: 'Product',
  company: 'Company',
  tutorials: 'Tutorials',
}

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const filteredPosts =
    activeFilter === 'all' ? posts : posts.filter((p) => p.category === activeFilter)
  const featuredPost = posts.find((p) => p.featured)
  const gridPosts = filteredPosts.filter((p) => !p.featured)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <>
      <GridBackground className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <FadeIn>
            <Badge className="mb-4">MOT Blog</Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-[#f5f5f5] md:text-5xl">
              Insights, guides, and <span className="text-gradient">AI updates.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#a3a3a3] md:text-lg">
              Tulisan dari tim MOT seputar agentic AI, product engineering, dan growth untuk startup
              modern.
            </p>
          </FadeIn>
        </div>
      </GridBackground>

      {/* FILTER */}
      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <FadeIn className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[#ffb800] text-[#050505]'
                    : 'border border-[#262626] bg-[#0a0a0a] text-[#a3a3a3] hover:border-[#ffb800] hover:text-[#f5f5f5]'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* FEATURED */}
      {activeFilter === 'all' && featuredPost && (
        <section className="py-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <Card className="group overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex items-center justify-center bg-gradient-to-br from-[#ffb800]/20 to-[#00d4aa]/20 p-8">
                    <div className="font-display text-6xl font-bold text-[#ffb800]">MOT</div>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-3 text-xs text-[#737373]">
                      <span className="font-semibold text-[#ffb800]">
                        {categoryLabels[featuredPost.category]}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.readTime} read</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-[#f5f5f5] group-hover:text-[#ffb800] transition-colors md:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#a3a3a3]">
                      {featuredPost.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#ffb800]">
                      Read article <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </FadeIn>
          </div>
        </section>
      )}

      {/* POSTS GRID */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {gridPosts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                >
                  <Card className="group h-full cursor-pointer overflow-hidden">
                    <div className="h-32 bg-gradient-to-br from-[#ffb800]/10 to-[#00d4aa]/10" />
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center gap-2 text-[10px] text-[#737373]">
                        <span className="font-semibold text-[#ffb800]">
                          {categoryLabels[post.category]}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-display text-base font-bold text-[#f5f5f5] group-hover:text-[#ffb800] transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-[#a3a3a3]">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-12 md:py-16 border-t border-[#1f1f1f] bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-[#262626] bg-[#050505] p-8 md:p-10">
              <div className="bg-grid absolute inset-0 opacity-30" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffb800]/10 blur-3xl" />
              <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                  <h2 className="font-display text-2xl font-bold text-[#f5f5f5]">
                    Stay in the loop.
                  </h2>
                  <p className="mt-1 text-sm text-[#a3a3a3]">
                    Insight engineering dan product update langsung ke inbox. Tidak ada spam.
                  </p>
                </div>
                <form onSubmit={handleSubscribe} className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="w-full sm:w-64"
                    required
                  />
                  <Button type="submit" disabled={subscribed}>
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
