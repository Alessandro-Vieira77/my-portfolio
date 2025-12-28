import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { Database, LayoutPanelTop, Server, Wrench } from 'lucide-react'
import { skills } from '@/db/db'
import { Badge } from '../ui/badge'

export function CardSkills() {
  return (
    <Card className="min-h-[500px] w-full max-w-[850px] bg-[#E6C0C0]">
      <CardHeader className="flex w-full items-center justify-center gap-2 pt-10 text-center sm:mx-auto">
        <Wrench className="o h-6 w-6 md:h-10 md:w-10" />{' '}
        <p className="jersey-10-regular text-2xl md:text-[41px]">Habilidades Técnicas</p>
      </CardHeader>
      <CardContent className="cabin-regular flex flex-col gap-8 px-8 text-sm text-[##6B4F4F] md:px-15 md:text-lg">
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-center gap-2">
              <LayoutPanelTop color="rgb(211, 138, 163)" size={24} />
              <h2 className="jersey-10-regular text-xl">Front-end</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {skills[0].frontEnd.map((skill, index) => (
                <Badge
                  className="cabin-regular bg-white px-2.5 py-1 text-sm font-bold text-[#6B4F4F] shadow-lg"
                  key={index}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-center gap-2">
              <Server color="rgb(211, 138, 163)" size={24} />
              <h2 className="jersey-10-regular text-xl">Back-end</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {skills[1].backEnd.map((skill, index) => (
                <Badge
                  className="cabin-regular bg-white px-2.5 py-1 text-sm font-bold text-[#6B4F4F] shadow-lg"
                  key={index}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="flex items-center justify-center gap-2">
              <Database color="rgb(211, 138, 163)" size={24} />
              <h2 className="jersey-10-regular text-xl">Banco de Dados & Tools </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {skills[2].databaseAndTools.map((skill, index) => (
                <Badge
                  className="cabin-regular bg-white px-2.5 py-1 text-sm font-bold text-[#6B4F4F] shadow-lg"
                  key={index}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
