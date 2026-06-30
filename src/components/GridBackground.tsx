import type { ReactNode } from 'react'

interface GridBackgroundProps {
  children: ReactNode
  className?: string
  radial?: boolean
}

export function GridBackground({ children, className = '', radial = true }: GridBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="bg-grid absolute inset-0" />
      {radial && <div className="bg-radial-glow absolute inset-0" />}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
