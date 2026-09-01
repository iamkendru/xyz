const slots = ['frame one', 'frame two', 'frame three', 'frame four', 'frame five', 'frame six']

export const metadata = {
  title: 'Gallery',
  description: 'A quiet gallery of photographs.',
}

export default function GalleryPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Gallery</h1>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {slots.map((slot) => (
          <div key={slot} className="flex aspect-square items-center justify-center border border-neutral-200 text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-600">
            {slot}
          </div>
        ))}
      </div>
    </section>
  )
}
