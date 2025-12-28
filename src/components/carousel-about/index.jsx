import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { CardAbout } from '../cards-about/card-about'
import { CardSkills } from '../cards-about/card-skills'
import { CardSoftSkills } from '../cards-about/card-soft-skills'
import { CardFreelance } from '../cards-about/card-freelance'

export function CarouselAbout() {
  return (
    <div className="relative w-full">
      <Carousel className="mx-auto w-full max-w-4xl">
        <CarouselContent className="ml-0 py-10">
          <CarouselItem className="pr-0">
            <CardAbout />
          </CarouselItem>
          <CarouselItem className="">
            <CardSkills />
          </CarouselItem>
          <CarouselItem className="">
            <CardSoftSkills />
          </CarouselItem>
          <CarouselItem className="">
            <CardFreelance />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious
          id="prev"
          className="-left-1 h-12 w-12 shadow-[4px_4px_0_#000] sm:-left-4"
        />
        <CarouselNext
          id="next"
          className="-right-1 h-12 w-12 shadow-[4px_4px_0_#000] sm:-right-1"
        />
      </Carousel>
    </div>
  )
}
