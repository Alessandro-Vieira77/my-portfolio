import { CarouselAbout } from '../carousel-about'
import { useTranslation } from 'react-i18next'

export function About({ id }) {
  const { t } = useTranslation()
  return (
    <section
      id={id}
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
          src="https://media.licdn.com/dms/image/v2/D4E03AQGdZ8dDqI2DIA/profile-displayphoto-crop_800_800/B4EZipH2Z.GYAQ-/0/1755184065034?e=1769040000&v=beta&t=jSb9zP4nuyLtyeK4mElSyqOS1sMZ0ppaIfQqEGGrjPg"
          alt=""
        />
        <CarouselAbout />
      </div>
    </section>
  )
}
