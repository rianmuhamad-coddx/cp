import * as React from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)

  return (
    <div
      className={cn(
        'rounded-2xl border bg-[#0a0a0a] p-5 transition-colors',
        isOpen ? 'border-[#ffb800]/30' : 'border-[#262626]'
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-display pr-4 text-base font-semibold text-[#f5f5f5]">
          {question}
        </span>
        <span
          className={cn(
            'flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#ffb800]/10 text-[#ffb800] transition-transform',
            isOpen && 'rotate-45'
          )}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-sm leading-relaxed text-[#a3a3a3]">{answer}</p>
        </div>
      </div>
    </div>
  )
}

interface AccordionProps {
  items: AccordionItemProps[]
}

function Accordion({ items }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <AccordionItem key={idx} {...item} />
      ))}
    </div>
  )
}

export { Accordion, AccordionItem }
