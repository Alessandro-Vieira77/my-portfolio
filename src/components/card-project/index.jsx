import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { DialogProject } from "./dailog-project";

export function CardProject({ projects }) {
  return (
    <Card
      id="card-project"
      className="w-full pt-0 px-0 border-black border-3 gap-6 shadow-[4px_4px_0_#000]"
    >
      <CardHeader className="p-0 ">
        <img
          className="w-full object-cover rounded-t-lg border-b-3 border-black"
          src={projects.image}
          alt={projects.name}
        />
      </CardHeader>
      <CardContent className="space-y-4 px-6">
        <h2 className="text-xl font-bold text-black">{projects.name}</h2>
        <div className="flex gap-2 flex-wrap w-[90%] ">
          {projects.categorys.map((category) => (
            <Badge
              className="bg-[#EBE1D1] text-black border-2 border-black"
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
  );
}
