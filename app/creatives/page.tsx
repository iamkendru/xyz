import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Diary',
  description: 'Read my diary.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Diary</h1>
      <BlogPosts />
    </section>
  )
}
