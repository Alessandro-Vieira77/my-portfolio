import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { projects } from '@/db/db'
import { CardProject } from '../card-project'

export function CarouselProjects() {
  return (
    <Carousel className="mx-auto w-full max-w-4xl">
      <CarouselContent className="gap-4 py-10">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="max-w-[300px] basis-1/1 pl-1 sm:min-w-[300px] sm:basis-1/2 md:basis-1/3"
          >
            <div className="p-1">
              <CardProject projects={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious id="prev" className="-left-11 h-12 w-12 shadow-[4px_4px_0_#000]" />
      <CarouselNext id="next" className="-right-11 h-12 w-12 shadow-[4px_4px_0_#000]" />
    </Carousel>
  )
}
