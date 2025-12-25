import { Earth } from "lucide-react";
import { Button } from "./components/ui/button";
import StarSvg from "./assets/star-06-svgrepo-com.svg?react";
import { CarouselProjects } from "./components/carousel-projects";

export default function App() {
  const navNames = ["Projects", "About", "Education", "Contact"];

  return (
    <div id="container" className="flex flex-col min-h-screen relative">
      <header className="bg-[#EBE1D1] text-black py-4 px-6 w-[700px] z-20 mx-auto mt-8 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2">
        <nav className="w-full">
          <ul className="flex w-full items-center justify-between">
            {navNames.map((name) => (
              <li key={name}>
                <a href={`#${name.toLowerCase()}`}>{name}</a>
              </li>
            ))}
            <Button className="space-x-2 cursor-pointer">
              <Earth /> PT | EN
            </Button>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="w-full h-screen flex">
          <h1>Home</h1>
        </section>
        <section
          id="projects"
          className="w-full h-screen flex flex-col gap-8 items-center pt-30"
        >
          <div className="flex flex-col items-center gap-2">
            <StarSvg className="w-8 h-8 object-contain" />
            <h1 className="text-5xl uppercase text-white rubik-gemstones-regular">
              Meus Projetos
            </h1>
            <StarSvg className="w-8 h-8 object-contain" />
            <p className="text-xl text-white">Code • Design • Innovation</p>
          </div>
          <CarouselProjects />
        </section>
        <section id="about" className="w-full h-screen flex">
          <h1 className="">Sobre Mim</h1>
        </section>
        <section id="education" className="w-full h-screen flex">
          <h1>Faculdade</h1>
        </section>
        <section id="contact" className="w-full h-screen flex">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  );
}
