import { User } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { useTranslation } from 'react-i18next'

export function CardAbout() {
  const { t } = useTranslation()
  return (
    <Card className="min-h-[500px] w-full max-w-[850px] bg-[#3674B5]">
      <CardHeader className="flex items-center justify-center gap-2 pt-10">
        <User className="w-6 object-contain text-white md:w-10" size={30} />{' '}
        <p className="jersey-10-regular text-2xl text-white md:text-[41px]">
          {t('sessionAbout.cards.whoAmI.title')}
        </p>
      </CardHeader>
      <CardContent className="cabin-regular flex flex-col gap-8 px-8 text-sm text-white md:px-15 md:text-lg">
        <p className="text-center">{t('sessionAbout.cards.whoAmI.description1')}</p>
        <p className="text-center">{t('sessionAbout.cards.whoAmI.description2')}</p>
      </CardContent>
    </Card>
  )
}
