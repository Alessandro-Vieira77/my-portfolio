import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { projects } from "@/db/db";
import { CardProject } from "../card-project";

export function CarouselProjects() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent className="gap-4 py-10">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <CardProject projects={project} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        id="prev"
        className="-left-5 w-12 h-12 shadow-[4px_4px_0_#000]"
      />
      <CarouselNext
        id="next"
        className="-right-5 w-12 h-12 shadow-[4px_4px_0_#000] "
      />
    </Carousel>
  );
}
