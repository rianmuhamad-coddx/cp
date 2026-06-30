import { Link } from 'react-router-dom'
import { TwitterIcon, LinkedInIcon, GitHubIcon } from '@/components/SocialIcons'

const footerLinks = {
  product: [
    { label: 'Platform', href: '/products' },
    { label: 'Integrations', href: '/products' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/blog' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/blog' },
    { label: 'Guides', href: '/blog' },
    { label: 'API Reference', href: '/blog' },
    { label: 'Support', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
  { icon: GitHubIcon, label: 'GitHub', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffb800] to-[#ff8a00]">
                <span className="font-display text-sm font-bold text-[#050505]">M</span>
              </div>
              <span className="font-display text-lg font-bold text-[#f5f5f5]">MOT</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#737373]">
              Platform agentic AI untuk startup yang ingin membangun AI yang benar-benar bekerja.
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#262626] text-[#a3a3a3] transition-colors hover:border-[#ffb800] hover:text-[#ffb800]"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-3 text-sm font-semibold capitalize text-[#f5f5f5]">{title}</h4>
              <ul className="space-y-2 text-sm text-[#737373]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="transition-colors hover:text-[#f5f5f5]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#1f1f1f] pt-6 md:flex-row">
          <p className="text-xs text-[#525252]">
            © {new Date().getFullYear()} MOT (Mind of Things). All rights reserved.
          </p>
          <p className="text-xs text-[#525252]">Built with care in Jakarta 🇮🇩</p>
        </div>
      </div>
    </footer>
  )
}
