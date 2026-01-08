import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ExternalLink, Github, X } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useTranslation } from 'react-i18next'

export function DialogProject({ projects }) {
  const { t } = useTranslation()

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            id="view"
            className="jersey-10-regular rounded-none text-xl font-bold transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:scale-110 hover:transform hover:bg-[#3674B5] hover:text-white hover:shadow-[4px_4px_0px_#000]"
          >
            {t('sessionProjects.cardButtonView')} +
          </Button>
        </DialogTrigger>
        <DialogContent className="flex h-[500px] flex-col overflow-y-auto border-3 border-black bg-white px-2 pt-8 shadow-[15px_15px_0px_#000] sm:h-[700px] sm:max-w-[800px] sm:px-6">
          <DialogClose className="absolute top-4 right-4 cursor-pointer rounded-full border-2 border-black bg-white p-1 transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:scale-125 hover:transform hover:border-none hover:bg-[#3674B5] hover:text-white">
            <X size={28} />
          </DialogClose>
          <DialogHeader className="flex flex-col gap-4">
            <img
              src={projects.image}
              alt={projects.name}
              className="h-[200px] w-full rounded-lg border-3 border-black object-cover sm:h-[300px]"
            />
            <DialogTitle className="text-left text-[28px] font-bold text-[#3674B5] sm:text-[40px]">
              {projects.name}
            </DialogTitle>
            <DialogDescription className="text-left text-sm leading-normal text-[#819A91] sm:text-xl">
              {projects.projectContent?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="my-5 w-full border-b-3 border-black"></div>
          <div className="flex w-full flex-col gap-8">
            <div className="flex w-full flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="pb-3.5 text-4xl font-bold text-[#3674B5]">|</p>
                <p className="jersey-10-regular text-2xl font-bold text-black text-shadow-[3px_3px_0px_#4DA8DA] sm:text-3xl">
                  🖼️ {t('sessionProjects.contentProject.gallery')}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[repeat(3,minmax(0,1fr))]">
                {projects.projectContent?.gallery.map((image, index) => (
                  <img
                    style={{ imageRendering: 'auto' }}
                    key={index}
                    src={image}
                    alt={projects.name}
                    className="h-auto w-full overflow-hidden rounded-lg border-2 border-black object-fill shadow-[5px_5px_0px_#000] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:transform hover:shadow-[5px_5px_0px_#3674B5] sm:h-[150px] md:h-[200px]"
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <p className="pb-3.5 text-4xl font-bold text-[#3674B5]">|</p>
                  <p className="jersey-10-regular text-2xl text-black text-shadow-[3px_3px_0px_#4DA8DA] sm:text-3xl">
                    🎯 {t('sessionProjects.contentProject.objectives')}
                  </p>
                </div>
                <p className="leading-normal text-[#819A91] sm:text-xl">
                  {projects.projectContent?.objectives}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="pb-3.5 text-4xl font-bold text-[#3674B5]">|</p>
                  <p className="jersey-10-regular text-2xl text-black text-shadow-[3px_3px_0px_#4DA8DA] sm:text-3xl">
                    🛠️ {t('sessionProjects.contentProject.technologies')}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projects.projectContent?.technologies.map((technology, index) => (
                    <Badge
                      className="cabin-regular border-2 border-black bg-[#D1D8BE] px-2.5 py-1 text-xs text-black md:text-sm"
                      key={index}
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <p className="pb-3.5 text-4xl font-bold text-[#d38aa3]">|</p>
                <p className="jersey-10-regular text-2xl text-black text-shadow-[3px_3px_0px_#4DA8DA] sm:text-3xl">
                  {' '}
                  ⏳ {t('sessionProjects.contentProject.challengesEndSolutions')}
                </p>
              </div>

              <p className="text-sm leading-normal text-[#819A91] sm:text-xl">
                {projects.projectContent?.challengesEndSolutions}
              </p>
            </div>
          </div>

          <DialogFooter className="mt-4 flex flex-row gap-4 self-start">
            <Button
              className="rounded-none shadow-[5px_5px_0px_var(--color-ring)] transition-all duration-200 ease-in-out hover:scale-[1.1] hover:transform hover:bg-[#3674B5] hover:shadow-[5px_5px_0px_#000]"
              asChild
            >
              <a href={projects.projectContent?.deploy} target="_blank">
                <ExternalLink size={24} /> {t('sessionProjects.contentProject.buttonLiveProject')}
              </a>
            </Button>

            <Button
              className="rounded-none border-2 border-[#3674B5] bg-white text-[#3674B5] shadow-[5px_5px_0px_var(--color-ring)] transition-all duration-200 ease-in-out hover:scale-[1.1] hover:transform hover:bg-white hover:shadow-[5px_5px_0px_#000]"
              asChild
            >
              <a href={projects.projectContent?.repository} target="_blank">
                <Github size={24} /> GitHub
              </a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
