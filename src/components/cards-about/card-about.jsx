import { User } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'

export function CardAbout() {
  return (
    <Card className="min-h-[500px] w-full max-w-[850px] bg-[#3674B5]">
      <CardHeader className="flex items-center justify-center gap-2 pt-10">
        <User className="w-6 object-contain text-white md:w-10" size={30} />{' '}
        <p className="jersey-10-regular text-2xl text-white md:text-[41px]">Quem eu sou</p>
      </CardHeader>
      <CardContent className="cabin-regular flex flex-col gap-8 px-8 text-sm text-white md:px-15 md:text-lg">
        <p className="text-center">
          Sou <strong>Estudante de Engenharia de Software</strong> e{' '}
          <strong>Desenvolvedor Full Stack</strong>, com experiência no desenvolvimento de
          aplicações web completas, atuando tanto no front-end quanto no back-end. Busco aplicar
          boas práticas, criar soluções escaláveis e evoluir constantemente por meio de projetos
          reais e aprendizado contínuo.
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
