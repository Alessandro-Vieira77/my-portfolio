import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";

export function DialogProject({ projects }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button id="view" className=" rounded-none font-bold">
            ver +
          </Button>
        </DialogTrigger>
        <DialogContent
          id="ContentView"
          className="sm:max-w-[800px] bg-[#EBE1D1] border-3 border-black h-[700px] pt-10 px-11 overflow-y-auto"
        >
          <DialogClose className="absolute p-1 rounded-full right-4 top-4 border-2 border-black bg-white cursor-pointer ">
            <X className=" text-black" size={32} />
          </DialogClose>
          <DialogHeader className="flex flex-col gap-4">
            <img
              src={projects.image}
              alt={projects.name}
              className="w-full h-[300px] object-cover border-3 border-black rounded-lg"
            />
            <DialogTitle className="text-4xl font-bold text-black">
              {projects.name}
            </DialogTitle>
            <DialogDescription className="text-xl">
              {projects.description}
            </DialogDescription>
            <div className="w-full border-b-2 border-black"></div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex gap-4">
                <Label>Nome</Label>
                <Input value={projects.name} />
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </form>
    </Dialog>
  );
}
