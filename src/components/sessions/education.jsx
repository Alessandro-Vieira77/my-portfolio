import { useTranslation } from 'react-i18next'
import { Badge } from '../ui/badge'
import { Recycle } from 'lucide-react'

export function Education({ id }) {
  const { t } = useTranslation()
  return (
    <section
      id={id}
      className="flex min-h-screen w-full flex-col items-center gap-4 bg-[#EEEFE0] bg-[repeating-linear-gradient(#3674B5_0px,#3674B5_1px,transparent_1px,transparent_32px)] px-4 pt-30 pb-3.5 md:px-16"
    >
      <h2 className="titleEducation caveat-bold relative z-1 block h-13 text-3xl sm:text-4xl md:h-17 md:text-7xl">
        {t('sesseionEducation.internship.title')}
      </h2>
      <div className="grid w-full grid-cols-[1fr] lg:grid-cols-[1fr_1fr]">
        <div className="grid w-full rounded-2xl border-2 bg-white p-8 shadow-md">
          <div className="flex flex-col gap-8">
            <div className="flex w-full items-center justify-between">
              <Badge className="jersey-10-regular md:text-md rounded-lg p-2 text-xs md:text-lg">
                {t('sesseionEducation.internship.internshipDate')}: 16/09/2024 - 12/02/2025
              </Badge>
              <Recycle color="#3674B5" className="size-6 md:size-10" />
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
          <a
            href="https://image2url.com/r2/default/documents/1767967968449-395d99b9-1922-4a0b-8039-590ec75bb264.pdf"
            target="_blank"
          >
            <img
              src="https://i.imgur.com/cabvGo2.jpeg"
              className="w-fit rotate-2 rounded-lg object-contain shadow-md transition-all duration-300 hover:scale-110 hover:rotate-0"
              alt="certificado"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
