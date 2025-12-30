import { LanguageButton } from '../linguage-button'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Header() {
  const [language, setLanguage] = useState('en')
  const { t, i18n } = useTranslation()
  const navNames = [
    `${t('header.projects')}`,
    `${t('header.about')}`,
    `${t('header.education')}`,
    `${t('header.contact')}`,
  ]

  return (
    <header className="fixed top-0 left-1/2 z-20 mx-auto mt-6 hidden w-full max-w-[700px] -translate-x-1/2 transform rounded-full bg-[#819A91] px-6 py-4 drop-shadow-2xl md:block">
      <nav className="w-full">
        <ul className="flex w-full items-center justify-between">
          {navNames.map(name => (
            <li key={name}>
              <a
                id="navLink"
                className="relative z-1 block overflow-hidden rounded-[32px] px-6 py-2.5 text-lg font-semibold text-[#ffff] transition-colors duration-500"
                href={`#${name.toLowerCase()}`}
              >
                {name}
              </a>
            </li>
          ))}
          {language === 'en' ? (
            <LanguageButton
              L1="EN"
              L2="PT"
              onClick={() => {
                setLanguage('pt')
                i18n.changeLanguage('pt-BR')
              }}
              color="text-black"
              colorL1="text-black"
              colorL2="text-white"
            />
          ) : (
            <LanguageButton
              L1="PT"
              L2="EN"
              onClick={() => {
                setLanguage('en')
                i18n.changeLanguage('en')
              }}
              color="text-white"
              colorL1="text-white"
              colorL2="text-black"
            />
          )}
        </ul>
      </nav>
    </header>
  )
}
