import { Earth } from 'lucide-react'
import { Button } from './components/ui/button'
import StarSvg from './assets/star-06-svgrepo-com.svg?react'
import { CarouselProjects } from './components/carousel-projects'

export default function App() {
  const navNames = ['Projects', 'About', 'Education', 'Contact']

  return (
    <div id="container" className="relative flex min-h-screen flex-col">
      <header className="fixed top-0 left-1/2 z-20 mx-auto mt-8 w-[700px] -translate-x-1/2 transform rounded-full bg-[#EBE1D1] px-6 py-4 text-black">
        <nav className="w-full">
          <ul className="flex w-full items-center justify-between">
            {navNames.map(name => (
              <li key={name}>
                <a href={`#${name.toLowerCase()}`}>{name}</a>
              </li>
            ))}
            <Button className="cursor-pointer space-x-2">
              <Earth /> PT | EN
            </Button>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="flex h-screen w-full">
          <h1>Home</h1>
        </section>
        <section id="projects" className="flex h-screen w-full flex-col items-center gap-8 pt-30">
          <div className="flex flex-col items-center gap-2">
            <StarSvg className="h-8 w-8 object-contain" />
            <h1 className="rubik-gemstones-regular text-5xl text-white uppercase">Meus Projetos</h1>
            <StarSvg className="h-8 w-8 object-contain" />
            <p className="text-xl text-white">Code • Design • Innovation</p>
          </div>
          <CarouselProjects />
        </section>
        <section id="about" className="flex h-screen w-full">
          <h1 className="">Sobre Mim</h1>
        </section>
        <section id="education" className="flex h-screen w-full">
          <h1>Faculdade</h1>
        </section>
        <section id="contact" className="flex h-screen w-full">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  )
}
