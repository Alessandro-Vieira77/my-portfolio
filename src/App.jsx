import StarSvg from './assets/star-06-svgrepo-com.svg?react'
import { CarouselAbout } from './components/carousel-about'
import { CarouselProjects } from './components/carousel-projects'
import { Header } from './components/header'
import { Menu } from './components/menu'

export default function App() {
  return (
    <div id="container" className="relative flex min-h-screen flex-col">
      <Menu />
      <Header />
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
        <section
          id="about"
          className="flex min-h-screen w-full flex-col items-center justify-center bg-[#fdfbf7] bg-[repeating-linear-gradient(transparent,transparent_29px,#eedac5_30px)] pt-26"
        >
          <div className="w-65">
            <h1 className="jersey-10-regular text-center text-7xl text-black uppercase sm:w-full">
              Sobre Mim
            </h1>
            <div className="mb-10 border-3 border-[#cd5c5c]"></div>
          </div>
          <div className="relative w-full px-4">
            <img
              className="absolute -top-5 left-1/2 z-10 mx-auto mt-0 h-[110px] w-[110px] -translate-x-1/2 rounded-full border-3 border-white object-cover"
              src="https://i.pinimg.com/originals/bc/6f/70/bc6f70c1c6dd96e16b906d5b2a0bae4b.png"
              alt=""
            />
            <CarouselAbout />
          </div>
        </section>
        <section
          id="education"
          className="flex h-screen w-full bg-[#fdfbf7] bg-[repeating-linear-gradient(#cd5c5c_0px,#cd5c5c_1px,transparent_1px,transparent_32px)]"
        >
          <h1>Faculdade</h1>
        </section>
        <section id="contact" className="flex h-screen w-full">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  )
}
