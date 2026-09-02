import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Ways to get in touch with me.',
}

const links = [
  {
    label: 'Email',
    value: 'pokhrelkendra@gmail.com',
    href: 'mailto:pokhrelkendra@gmail.com',
  },
{
  label: 'GitHub',
  value: 'github.com/iamkendru',
  href: 'https://github.com/iamkendru',
},
{
  label: 'Paper',
  value: 'paper.wf/kendru',
  href: 'https://paper.wf/kendru',
},
{
  label: 'WhatsApp',
  value: 'wa.me/9779807391549',
  href: 'https://wa.me/9779807391549',
},
]

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-12 px-6 py-16 md:px-8 md:py-24">
      <header className="flex flex-col gap-4">
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">contact</p>
        <h1 className="title text-4xl font-medium tracking-tight md:text-5xl">
          Let&apos;s talk.
        </h1>
        <p className="max-w-lg text-base leading-7 text-neutral-600 dark:text-neutral-300">
        Get in touch. 
        </p>
      </header>

      <section aria-label="Contact details" className="flex flex-col border-t border-neutral-200 dark:border-neutral-800">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="group flex items-center justify-between gap-6 border-b border-neutral-200 py-5 transition-colors hover:text-neutral-500 dark:border-neutral-800 dark:hover:text-neutral-300"
          >
            <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400">{link.label}</span>
            <span className="text-right text-sm underline decoration-neutral-300 underline-offset-4 group-hover:decoration-current">
              {link.value}
            </span>
          </a>
        ))}
      </section>
    </main>
  )
}

