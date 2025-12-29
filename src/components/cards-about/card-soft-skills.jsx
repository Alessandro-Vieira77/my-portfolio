import { Card, CardContent, CardHeader } from '../ui/card'
import { Brain, Clover, Heart, Lightbulb, TimerIcon, Users, Zap } from 'lucide-react'
import { BadgeComponent } from './components/badge-component'

export function CardSoftSkills() {
  return (
    <Card className="min-h-[500px] w-full max-w-[850px] bg-[#3674B5]">
      <CardHeader className="flex items-center justify-center gap-2 pt-10">
        <Clover className="h-6 w-6 text-white md:h-10 md:w-10" size={30} />{' '}
        <p className="jersey-10-regular text-2xl text-white md:text-[41px]">Soft Skills</p>
      </CardHeader>
      <CardContent className="cabin-regular grid grid-cols-1 gap-4 px-8 text-sm text-white md:grid-cols-2 md:px-15 md:text-lg">
        <BadgeComponent icon={<Users size={20} color="#3674B5" />} title="Comunicação em Equipe" />
        <BadgeComponent
          icon={<TimerIcon size={20} color="#3674B5" />}
          title="Organização & Proatividade"
        />
        <BadgeComponent icon={<Zap size={20} color="#3674B5" />} title="Aprendizado Rápido" />
        <BadgeComponent icon={<Lightbulb size={20} color="#3674B5" />} title="Criatividade" />
        <BadgeComponent icon={<Brain size={20} color="#3674B5" />} title="Soluções de Problemas" />
        <BadgeComponent icon={<Heart size={20} color="#3674B5" />} title="Compromisso com Metas" />
      </CardContent>
    </Card>
  )
}
