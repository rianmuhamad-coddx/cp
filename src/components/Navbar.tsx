import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1f1f1f] bg-[#050505]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ffb800] to-[#ff8a00]">
              <span className="font-display text-sm font-bold text-[#050505]">M</span>
            </div>
            <span className="font-display text-lg font-bold text-[#f5f5f5]">MOT</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'nav-link text-sm font-medium text-[#a3a3a3] transition-colors hover:text-[#f5f5f5]',
                  location.pathname === link.href && 'active text-[#f5f5f5]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#262626] text-[#f5f5f5] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-[#1f1f1f] bg-[#0a0a0a] transition-all duration-300 md:hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                location.pathname === link.href
                  ? 'bg-[#ffb800]/10 text-[#ffb800]'
                  : 'text-[#a3a3a3] hover:bg-[#141414] hover:text-[#f5f5f5]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-2 w-full" asChild>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
