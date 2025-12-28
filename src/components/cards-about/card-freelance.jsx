import { Card, CardContent, CardHeader } from '../ui/card'
import { BriefcaseBusiness, Sparkles, Star } from 'lucide-react'
import { Badge } from '../ui/badge'

export function CardFreelance() {
  return (
    <Card className="min-h-[500px] w-full max-w-[850px] bg-[#E6C0C0]">
      <CardHeader className="flex items-center justify-center gap-2 pt-6">
        <Sparkles className="h-6 w-6 md:h-10 md:w-10" />{' '}
        <p className="jersey-10-regular text-2xl md:text-[41px]">Interesses & Freelance</p>
      </CardHeader>
      <CardContent className="cabin-regular w-full px-8 text-sm text-[##6B4F4F] md:px-15 md:text-lg">
        <div className="flex w-full justify-center gap-2">
          <Star size={20} color="#d38aa3" />
          <h2 className="jersey-10-regular pb-4 text-2xl text-black">Interesses</h2>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-2">
          <Badge className="h-[40px] bg-white px-4 text-sm font-bold text-[#6B4F4F] shadow-lg">
            Engenharia de Software
          </Badge>
          <Badge className="h-[40px] bg-white px-4 text-sm font-bold text-[#6B4F4F] shadow-lg">
            Desenvolvimento Web
          </Badge>
          <Badge className="h-[40px] bg-white px-4 text-sm font-bold text-[#6B4F4F] shadow-lg">
            Design de Interface
          </Badge>
          <Badge className="h-[40px] bg-white px-4 text-sm font-bold text-[#6B4F4F] shadow-lg">
            Inovação Tecnológica
          </Badge>
          <Badge className="h-[40px] bg-white px-4 text-sm font-bold text-[#6B4F4F] shadow-lg">
            Projetos Multidisciplinares
          </Badge>
        </div>

        <div className="mt-8 flex w-full flex-col gap-2 rounded-lg border-2 border-dashed border-[#d38aa3] bg-[#ffffff80] p-6">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness className="h-6 w-6 md:h-10 md:w-10" color="#d38aa3" />
            <h2 className="text-2xl font-bold text-black">Disponibilidade</h2>
          </div>
          <p className="cabin-regular text-sm text-[##6B4F4F] md:text-lg">
            Aberta a oportunidades de freelance e projetos nas áreas de desenvolvimento de software,
            front-end, back-end, UI/UX e aplicações interativas. Vamos criar algo juntos?
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
