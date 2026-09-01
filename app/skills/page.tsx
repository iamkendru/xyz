const skills = [
  {
    category: 'languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'Go', 'SQL'],
  },
  {
    category: 'web & systems',
    items: ['Next.js', 'React', 'Node.js', 'Linux', 'Docker', 'PostgreSQL'],
  },
  {
    category: 'niche & curious',
    items: ['embedded systems', 'homelab infrastructure', 'WebAssembly', 'MDX', 'shell scripting', 'electronics'],
  },
]

export const metadata = {
  title: 'Skills',
  description: 'Languages, tools, and technologies I work with.',
}

export default function SkillsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Skills</h1>
      <div className="flex flex-col gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h2 className="mb-3 font-mono text-sm lowercase text-neutral-500">{group.category}</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
