import StarSvg from './assets/star-06-svgrepo-com.svg?react'
import { CarouselProjects } from './components/carousel-projects'
import { useState } from 'react'
import LanguageButton from './components/linguage-button'

export default function App() {
  const navNames = ['Projects', 'About', 'Education', 'Contact']
  const [language, setLanguage] = useState('en')

  return (
    <div id="container" className="relative flex min-h-screen flex-col">
      <header className="fixed top-0 left-1/2 z-20 mx-auto mt-8 w-full max-w-[700px] -translate-x-1/2 transform rounded-full bg-[#EBE1D1] px-6 py-4 drop-shadow-2xl">
        <nav className="w-full">
          <ul className="flex w-full items-center justify-between">
            {navNames.map(name => (
              <li key={name}>
                <a
                  id="navLink"
                  className="relative z-1 block overflow-hidden rounded-[32px] px-6 py-2.5 text-lg font-semibold text-[#4a3b3b] transition-colors duration-500"
                  href={`#${name.toLowerCase()}`}
                >
                  {name}
                </a>
              </li>
            ))}
            {language === 'en' ? (
              <LanguageButton L1="EN" L2="PT" onClick={() => setLanguage('pt')} />
            ) : (
              <LanguageButton L1="PT" L2="EN" onClick={() => setLanguage('en')} />
            )}
          </ul>
        </nav>
      </header>
      <main>
        <section
          id="home"
          className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#e6beae] pt-20"
        >
          <img
            className="star-1 hero-star h-24 w-24 object-contain"
            src="https://aliceportfolio-dev.netlify.app/assets/star-1-Bwc5vTVD.png"
            alt=""
          />
          <img
            className="star-2 hero-star h-24 w-24 object-contain"
            src="https://aliceportfolio-dev.netlify.app/assets/star-1-Bwc5vTVD.png"
            alt=""
          />
          <img
            id="hero-image"
            className="z-10 h-auto w-full max-w-[700px] drop-shadow-2xl"
            src="https://aliceportfolio-dev.netlify.app/assets/hero-image-BINzAQjM.png"
            alt=""
          />
        </section>
        {/* Projects */}
        <section
          id="projects"
          className="flex min-h-screen w-full flex-col items-center gap-4 bg-[#f4eade] pt-20"
        >
          <div className="flex flex-col items-center gap-2">
            <StarSvg className="h-8 w-8 object-contain" />
            <h1 className="jersey-10-regular text-shadow-pink w-80 text-center text-7xl text-black uppercase sm:w-full">
              Meus Projetos
            </h1>
            <StarSvg className="h-6 w-6 object-contain" />
            <p className="text-foreground text-xl">Code • Design • Innovation</p>
          </div>
          <div className="w-full px-16">
            <CarouselProjects />
          </div>
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
