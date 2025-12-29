import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card'
import { DialogProject } from './dailog-project'

export function CardProject({ projects }) {
  return (
    <Card
      id="card-project"
      className="h-[430px] w-full cursor-pointer snap-center gap-6 rounded-[16px] border-3 border-black px-0 pt-0 shadow-[6px_6px_0_#3674B5] transition-all duration-300 ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#3674B5] sm:h-[420px]"
    >
      <CardHeader className="p-0">
        <img
          className="w-full rounded-t-lg border-b-3 border-black object-cover"
          src={projects.image}
          alt={projects.name}
        />
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        <h2 className="jersey-10-regular text-[32px] text-black">{projects.name}</h2>
        <div className="flex w-[90%] flex-wrap gap-2">
          {projects.categorys.map(category => (
            <Badge
              className="cabin-regular border-2 border-black bg-[#D1D8BE] px-2.5 py-1 text-sm text-black"
              key={category}
            >
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <DialogProject projects={projects} />
      </CardFooter>
    </Card>
  )
}
