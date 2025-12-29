import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { TextAlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import { LanguageButton } from '../linguage-button/index'

export function Menu() {
  const [language, setLanguage] = useState('en')
  const navNames = ['Projects', 'About', 'Education', 'Contact']
  return (
    <div className="fixed top-6 left-0 z-20 flex w-full justify-between px-6 md:hidden">
      <Sheet>
        <SheetTrigger className="rounded-full border border-white bg-[#bbe0ef] px-4 py-2">
          <TextAlignJustify size={30} color="#3674B5" />
        </SheetTrigger>
        <SheetContent className="border-2 border-white bg-[#bbe0ef]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <SheetClose className="absolute top-4 right-4 cursor-pointer rounded-full border-2 border-black bg-white p-1">
            <X size={30} />
          </SheetClose>
          <div>
            <ul>
              {navNames.map(name => (
                <li key={name}>
                  <a
                    id="navLink"
                    className="relative z-1 block overflow-hidden rounded-[32px] px-6 py-2.5 text-sm font-bold text-[#4a3b3b] transition-colors duration-500"
                    href={`#${name.toLowerCase()}`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
      {language === 'en' ? (
        <LanguageButton
          L1="EN"
          L2="PT"
          onClick={() => setLanguage('pt')}
          color="text-black"
          colorL1="text-black"
          colorL2="text-white"
        />
      ) : (
        <LanguageButton
          L1="PT"
          L2="EN"
          onClick={() => setLanguage('en')}
          color="text-white"
          colorL1="text-white"
          colorL2="text-black"
        />
      )}
    </div>
  )
}
