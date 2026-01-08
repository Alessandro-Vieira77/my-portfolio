import { CarouselProjects } from '../carousel-projects'
import { useTranslation } from 'react-i18next'
import StarSvg from '../../assets/star-06-svgrepo-com.svg?react'

export function Projects({ id }) {
  const { t } = useTranslation()
  return (
    <section
      id={id}
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
      <div className="w-full px-4 sm:px-16">
        <CarouselProjects />
      </div>
    </section>
  )
}
