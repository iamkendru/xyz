import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Kendra Pokhrel (kendru)
      </h1>
      <p className="mb-4">
        {`I'm Kendra Pokhrel, a technology and a computer enthusiast. 
        I've been learning web development components such as react, typescript and most part of frontend development.
        I also have experience in hardware, IoT, networking and partly homelabbing, as well as I have spent my fair share of time modifying embedded hardwares.
        I am a self made <Link href="https://instagram.com/kendrukophotography">photographer</Link> and also have experience in literature.`}
      </p>
    </section>
  )
}
