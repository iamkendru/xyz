'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects' },
  { path: '/skills', name: 'skills' },
  { path: '/contact', name: 'contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="flex items-start justify-between gap-4 lg:sticky lg:top-20">
        <nav className="flex min-w-0 flex-row items-start" id="nav" aria-label="Primary navigation">
          <div className="flex flex-wrap items-start gap-1">
            <Link href="/" className="relative m-1 px-2 py-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-200">home</Link>
            <div className="relative m-1">
              <button
                type="button"
                aria-expanded={open}
                aria-haspopup="true"
                onClick={() => setOpen(!open)}
                className="px-2 py-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              >
                creative
              </button>
              {open && (
                <div className="absolute left-0 top-full z-10 mt-2 flex min-w-32 flex-col border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-800 dark:bg-black">
                  <Link href="/creatives" onClick={() => setOpen(false)} className="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">writing</Link>
                  <Link href="/photography" onClick={() => setOpen(false)} className="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">photography</Link>
                </div>
              )}
            </div>
            {navItems.slice(1).map(({ path, name }) => (
              <Link key={path} href={path} className="relative m-1 px-2 py-1 transition-all hover:text-neutral-800 dark:hover:text-neutral-200">{name}</Link>
            ))}
          </div>
        </nav>
        <button type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="m-1 rounded-md p-2 text-lg leading-none transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900">
          <span>{dark ? '[light]' : '[dark]'}</span>
        </button>
      </div>
    </aside>
  )
}
