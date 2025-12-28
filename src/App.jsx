import { Recycle } from 'lucide-react'
import StarSvg from './assets/star-06-svgrepo-com.svg?react'
import { CarouselAbout } from './components/carousel-about'
import { CarouselProjects } from './components/carousel-projects'
import { Header } from './components/header'
import { Menu } from './components/menu'
import { Badge } from './components/ui/badge'

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
          className="flex min-h-screen w-full flex-col items-center gap-4 bg-[#fdfbf7] bg-[repeating-linear-gradient(#cd5c5c_0px,#cd5c5c_1px,transparent_1px,transparent_32px)] px-8 pt-30 pb-3.5 md:px-16"
        >
          <h2 className="titleEducation caveat-bold relative z-1 block h-13 text-4xl md:h-17 md:text-7xl">
            Estágio – Compass Uol
          </h2>
          <div className="grid w-full grid-cols-[1fr] lg:grid-cols-[1fr_1fr]">
            <div className="grid w-full rounded-2xl border-2 bg-white p-8 shadow-md">
              <div className="flex flex-col gap-8">
                <div className="flex w-full items-center justify-between">
                  <Badge className="jersey-10-regular text-md rounded-lg p-2 md:text-lg">
                    {' '}
                    Estágio: 16/09/2024 - 12/02/2025
                  </Badge>
                  <Recycle color="#cd5c5c" size={40} />
                </div>

                <div className="flex w-full flex-col gap-4">
                  <h3 className="cabin-bold text-2xl font-bold md:text-4xl">Sobre o estágio</h3>
                  <p className="text-md leading-normal sm:text-lg">
                    Atuei como estagiário em Front-end Development (React) na Compass.uol, onde
                    desenvolvi e mantive interfaces web modernas e responsivas utilizando React.
                    Tive contato com o contexto de Cloud AWS, participando de projetos integrados à
                    nuvem, consumindo APIs e seguindo boas práticas de desenvolvimento.
                  </p>
                  <p className="text-md leading-normal sm:text-lg">
                    Trabalhei em colaboração com times ágeis, utilizando Git, aplicando conceitos de
                    componentização, UX/UI e clean code, o que contribuiu significativamente para
                    meu aprendizado técnico e profissional.
                  </p>
                </div>

                <div className="flex w-full flex-col items-center gap-4">
                  <h3 className="cabin-bold w-full text-left text-2xl font-bold md:text-4xl">
                    Tecnologias
                  </h3>
                  <div className="flex w-full flex-wrap gap-4">
                    <Badge className="cabin-bold rounded-lg text-xs"> React</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> Tailwind</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> JavaScript</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> TypeScript</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> Git</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> GitHub</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> AWS</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> Testing Library</Badge>
                    <Badge className="cabin-bold rounded-lg text-xs"> Jest</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 p-16">
              <h3 className="cabin-bold text-4xl font-bold">Certificado</h3>
              <a href="https://i.imgur.com/cabvGo2.jpeg" target="_blank">
                <img
                  src="https://i.imgur.com/cabvGo2.jpeg"
                  className="w-fit rotate-2 rounded-lg object-contain shadow-md transition-all duration-300 hover:scale-110 hover:rotate-0"
                  alt="certificado"
                />
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="flex min-h-screen w-full">
          <h1>Contato</h1>
        </section>
      </main>
    </div>
  )
}
