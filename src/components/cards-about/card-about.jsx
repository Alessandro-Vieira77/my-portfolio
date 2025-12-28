import { User } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'

export function CardAbout() {
  return (
    <Card className="min-h-[500px] w-full max-w-[850px] bg-[#E6C0C0]">
      <CardHeader className="flex items-center justify-center gap-2 pt-10">
        <User className="w-6 object-contain md:w-10" />{' '}
        <p className="jersey-10-regular text-2xl md:text-[41px]">Quem eu sou</p>
      </CardHeader>
      <CardContent className="cabin-regular flex flex-col gap-8 px-8 text-sm text-[##6B4F4F] md:px-15 md:text-lg">
        <p className="text-center">
          Sou <strong>Alessandro Vieira</strong>, estudante de{' '}
          <strong>Engenharia de Computação na UERJ</strong>, apaixonado por tecnologia, inovação e
          criação de soluções que unem lógica, design e experiência do usuário.
        </p>
        <p className="text-center">
          Além disso, sou apaixonado por <strong>aprender e me desafiar</strong>, sempre buscando
          aprimorar minhas habilidades e contribuir para projetos que possam impactar positivamente
          a sociedade.
        </p>
      </CardContent>
    </Card>
  )
}
