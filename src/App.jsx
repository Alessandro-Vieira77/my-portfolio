import StarSvg from './assets/star-06-svgrepo-com.svg?react'
import { CarouselAbout } from './components/carousel-about'
import { CarouselProjects } from './components/carousel-projects'
import { Header } from './components/header'
import { Menu } from './components/menu'
import { Badge } from './components/ui/badge'
import { Card, CardContent, CardHeader } from './components/ui/card'
import { SocialNetwork } from './components/social-network'
import { Mail, Linkedin, Recycle, Github, MessageCircle, Paperclip } from 'lucide-react'
import { FormMsg } from './components/form-msg'
import CodeLogo from './assets/codeLogo.svg?react'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { t } = useTranslation()
  return (
    <div id="container" className="relative flex min-h-screen flex-col">
      <Menu />
      <Header />
      <main>
        <section
          id="home"
          className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#819A91] pt-20"
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
          <CodeLogo
            id="hero-image"
            className="z-10 h-auto w-full max-w-[400px] drop-shadow-2xl"
            alt=""
          />
        </section>
        {/* Projects */}
        <section
          id={t('header.projects').toLowerCase()}
          className="flex min-h-screen w-full flex-col items-center gap-4 bg-[#D1D8BE] pt-20"
        >
          <div className="flex flex-col items-center gap-2">
            <StarSvg className="h-8 w-8 object-contain" />
            <h2 className="jersey-10-regular w-80 text-center text-7xl text-[#3674B5] uppercase text-shadow-[4px_4px_0_#000] sm:w-full">
              {t('sessionProjects.title')}
            </h2>
            <StarSvg className="h-6 w-6 object-contain" />
            <p className="text-foreground text-xl">{t('sessionProjects.myProjectDescription')}</p>
          </div>
          <div className="w-full px-16">
            <CarouselProjects />
          </div>
        </section>
        <section
          id={t('header.about').toLowerCase()}
          className="flex min-h-screen w-full flex-col items-center justify-center bg-[#EEEFE0] bg-[repeating-linear-gradient(transparent,transparent_29px,#eedac5_30px)] pt-26"
        >
          <div className="w-65">
            <h1 className="jersey-10-regular text-center text-7xl text-black uppercase sm:w-full">
              {t('sessionAbout.title')}
            </h1>
            <div className="mb-10 border-3 border-[#3674B5]"></div>
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
          id={t('header.education').toLowerCase()}
          className="flex min-h-screen w-full flex-col items-center gap-4 bg-[#EEEFE0] bg-[repeating-linear-gradient(#3674B5_0px,#3674B5_1px,transparent_1px,transparent_32px)] px-8 pt-30 pb-3.5 md:px-16"
        >
          <h2 className="titleEducation caveat-bold relative z-1 block h-13 text-4xl md:h-17 md:text-7xl">
            {t('sesseionEducation.internship.title')}
          </h2>
          <div className="grid w-full grid-cols-[1fr] lg:grid-cols-[1fr_1fr]">
            <div className="grid w-full rounded-2xl border-2 bg-white p-8 shadow-md">
              <div className="flex flex-col gap-8">
                <div className="flex w-full items-center justify-between">
                  <Badge className="jersey-10-regular text-md rounded-lg p-2 md:text-lg">
                    {t('sesseionEducation.internship.internshipDate')}: 16/09/2024 - 12/02/2025
                  </Badge>
                  <Recycle color="#3674B5" size={40} />
                </div>

                <div className="flex w-full flex-col gap-4">
                  <h3 className="cabin-bold text-2xl font-bold md:text-4xl">
                    {t('sesseionEducation.internship.aboutInternship')}
                  </h3>
                  <p className="text-md leading-normal sm:text-lg">
                    {t('sesseionEducation.internship.aboutInternshipDescription.description1')}
                  </p>
                  <p className="text-md leading-normal sm:text-lg">
                    {t('sesseionEducation.internship.aboutInternshipDescription.description2')}
                  </p>
                </div>

                <div className="flex w-full flex-col items-center gap-4">
                  <h3 className="cabin-bold w-full text-left text-2xl font-bold md:text-4xl">
                    {t('sesseionEducation.internship.technologies')}
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
                    <Badge className="cabin-bold rounded-lg text-xs"> Scrum</Badge>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 p-16">
              <h3 className="caveat-bold text-4xl font-bold">
                {t('sesseionEducation.internship.certificate')}
              </h3>
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
        <section
          id={t('header.contact').toLowerCase()}
          className="flex min-h-screen w-full flex-col items-center gap-20 bg-[#FDFBF7] bg-[linear-gradient(#E8E8E8_1px,transparent_1px),linear-gradient(90deg,#E8E8E8_1px,transparent_1px)] bg-[length:30px_30px] px-8 pt-28 sm:px-16"
        >
          <div className="grid w-full grid-cols-[1fr] gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="flex w-full flex-col gap-4">
              <h2 className="caveat-bold relative z-1 block h-13 text-4xl md:h-17 md:text-6xl">
                {t('sessionContact.conversation.title')}
              </h2>
              <p className="cabin-regular text-sm leading-normal text-[#6B4F4F] md:text-lg">
                {t('sessionContact.conversation.description1')}
              </p>
              <p className="cabin-regular text-sm leading-normal text-[#6B4F4F] md:text-lg">
                {t('sessionContact.conversation.description2')}
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
              <a href="mailto:valessandrovieira@gmail.com">
                <SocialNetwork
                  icon={<Mail color="#3674B5" size={25} />}
                  text="valessandrovieira@gmail.com"
                />
              </a>
              <a href="https://www.linkedin.com/in/alessandro-vieira02" target="_blank">
                <SocialNetwork
                  icon={<Linkedin color="#3674B5" size={25} />}
                  text="/alessandro-vieira02"
                />
              </a>

              <a href="https://github.com/Alessandro-Vieira77" target="_blank">
                <SocialNetwork
                  icon={<Github color="#3674B5" size={25} />}
                  text="/Alessandro-Vieira77"
                />
              </a>

              <a href="https://wa.me/5598985825422" target="_blank">
                <SocialNetwork
                  icon={<MessageCircle color="#3674B5" size={25} />}
                  text={`Whatsapp (${t('sessionContact.conversation.chat')})`}
                />
              </a>
            </div>
          </div>
          <div className="flex w-full items-center justify-center pb-10">
            <FormMsg />
          </div>
        </section>
      </main>
    </div>
  )
}
