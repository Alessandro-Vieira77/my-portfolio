import { Earth } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  const navNames = ["Projects", "About", "Education", "Contact"];

  return (
    <div className="flex flex-col min-h-screen relative">
      <header className="bg-gray-800 text-white py-4 px-6 w-[700px] mx-auto mt-8 rounded-full fixed top-0 left-1/2 transform -translate-x-1/2">
        <nav className="w-full">
          <ul className="flex w-full items-center justify-between">
            {navNames.map((name) => (
              <li key={name}>
                <a href={`#${name.toLowerCase()}`}>{name}</a>
              </li>
            ))}
            <Button className="space-x-2 cursor-pointer">
              <Earth /> PT-BR
            </Button>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home" className="w-full h-screen flex bg-zinc-800">
          <h1>Home</h1>
        </section>
        <section id="projects" className="w-full h-screen flex bg-amber-800">
          <h1>Projetos</h1>
        </section>
        <section id="about" className="w-full h-screen flex bg-blue-800">
          <h1>Sobre Mim</h1>
        </section>
        <section id="education" className="w-full h-screen flex bg-green-800">
          <h1>Faculdade</h1>
        </section>
        <section id="contact" className="w-full h-screen flex bg-red-800">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  );
}
