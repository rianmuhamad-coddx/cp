import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/FadeIn'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  badgeVariant?: 'default' | 'secondary'
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  badgeVariant = 'default',
}: SectionHeaderProps) {
  return (
    <FadeIn className={`mb-10 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Badge variant={badgeVariant} className="mb-4">
          {eyebrow}
        </Badge>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-[#f5f5f5] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[#a3a3a3]">{description}</p>
      )}
    </FadeIn>
  )
}
