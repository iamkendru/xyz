const projects = [
  { name: 'Open source tools', description: 'Small utilities and experiments built for the web.' },
  { name: 'Embedded systems', description: 'Hardware, IoT, and electronics projects from the workbench.' },
  { name: 'Homelab', description: 'A growing collection of self-hosted services and infrastructure.' },
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article key={project.name} className="border-b border-neutral-200 pb-5 dark:border-neutral-800">
            <h2 className="font-medium">{project.name}</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
