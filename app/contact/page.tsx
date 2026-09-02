import type { Metadata } from 'next'
import {
  Mail,
  Code2,
  PenLine,
  MessageCircleCheck,
  send,
  type LucideIcon,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ways to get in touch with me.',
}

type ContactLink = {
  label: string
  value: string
  href: string
  icon: LucideIcon
}

const links: ContactLink[] = [
  {
    label: 'Email',
    value: '',
    href: 'mailto:pokhrelkendra@gmail.com',
    icon: AtSign,
  },
{
  label: 'GitHub',
  value: '',
  href: 'https://github.com/iamkendru',
  icon: Code2,
},
{
  label: 'Paper',
  value: '',
  href: 'https://paper.wf/kendru',
  icon: PenLine,
},
{
  label: 'WhatsApp',
  value: '',
  href: 'https://wa.me/9779807391549',
  icon: MessageCircleCheck,
},
{
  label: 'Telegram',
  value: '',
  href: 'https://t.me/iamkendru'
  icon: send
}
]

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 px-6 py-16 md:px-8 md:py-24">

    <header className="flex flex-col gap-4">
    <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
    contact
    </p>

    <h1 className="title text-4xl font-medium tracking-tight md:text-5xl">
    Let&apos;s talk.
    </h1>

    <p className="max-w-lg text-base leading-7 text-neutral-600 dark:text-neutral-300">
    Get in touch.
    </p>
    </header>

    <section
    aria-label="Contact details"
    className="flex flex-col border-t border-neutral-200 dark:border-neutral-800"
    >
    {links.map(({ label, value, href, icon: Icon }) => {
      const external = href.startsWith('http')

      return (
        <a
        key={label}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
        className="group flex items-center justify-between gap-6 border-b border-neutral-200 py-5 transition-colors hover:text-neutral-500 dark:border-neutral-800 dark:hover:text-neutral-300"
        >
        <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {label}
        </span>

        <span className="flex items-center gap-2 text-right text-sm underline decoration-neutral-300 underline-offset-4 group-hover:decoration-current">
        <Icon
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
        />
        {value}
        </span>
        </a>
      )
    })}
    </section>
    </main>
  )
}
