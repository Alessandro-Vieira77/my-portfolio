import CodeLogo from '../../assets/codeLogo.svg?react'

export function Home({ id }) {
  return (
    <section
      id={id}
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
  )
}
