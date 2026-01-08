import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useContext } from 'react'
import { Context } from '@/context/context'

import { CardProject } from '../card-project'

export function CarouselProjects() {
  const { projects } = useContext(Context)
  return (
    <Carousel className="mx-auto w-full max-w-4xl">
      <CarouselContent className="gap-1 border-2 border-red-500">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="max-w-[300px] basis-2/1 pl-1 sm:min-w-[300px] sm:basis-1/2 md:basis-1/3"
          >
            <div className="p-1">
              <CardProject projects={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        id="prev"
        className="-left-2 h-12 w-12 shadow-[4px_4px_0_#000] sm:-left-11"
      />
      <CarouselNext id="next" className="-right-2 h-12 w-12 shadow-[4px_4px_0_#000] sm:-right-9" />
    </Carousel>
  )
}
