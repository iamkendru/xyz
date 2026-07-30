import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kendra (kendru) Pokhrel
      </h1>
      <p className="mb-4">
        {`I'm Kendra Pokhrel, a technology enthusiast and an Electronics and Communication Engineering enthusiast.
        You can call me kendru. I've been learning web development components such as react, typescript and most part of frontend development.
        I also have experience in hardware, IoT, networking and partly homelabbing, as well as I have spent my fair share of time modifying embedded hardwares.
        I am a self made photographer and also have experience in literature.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
