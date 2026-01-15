import { Context } from './context'
import { useTranslation } from 'react-i18next'

export const ContextProvider = ({ children }) => {
  const { t } = useTranslation()
  const projects = [
    {
      name: 'FinTrack',
      image: 'https://i.imgur.com/KhCqZyA.png',
      projectContent: {
        gallery: [
          'https://i.imgur.com/KhCqZyA.png',
          'https://i.imgur.com/aEM1VPC.png',
          'https://i.imgur.com/qBAUf2p.png',
        ],
        description: t('sessionProjects.projects.finTrack.description'),
        objectives: t('sessionProjects.projects.finTrack.objectives'),
        technologies: [
          'Vite',
          'React',
          'JavaScript',
          'Tailwind CSS',
          'Shadcn UI',
          'Tanstack query',
          'React router',
          'React hook form',
          'Zod',
          'Axios',
          'Date fns',
          'React Number Format',
          'Query String',
        ],
        challengesEndSolutions: t('sessionProjects.projects.finTrack.challengesEndSolutions'),
        repository: 'https://github.com/Alessandro-Vieira77/fintrack.git',
        deploy: 'https://fintrack-gules.vercel.app/',
      },
      categorys: ['Project', 'Design', 'Code', 'Full Stack'],
    },
    {
      name: 'Doctor Agenda',
      image:
        'https://camo.githubusercontent.com/c5f18579f0dfe9a89450bb43b847f0b1b35cedd55be6f21eab2965c392c04e5d/68747470733a2f2f692e696d6775722e636f6d2f6749713155305a2e676966',
      projectContent: {
        gallery: [
          'https://camo.githubusercontent.com/c5f18579f0dfe9a89450bb43b847f0b1b35cedd55be6f21eab2965c392c04e5d/68747470733a2f2f692e696d6775722e636f6d2f6749713155305a2e676966',
          'https://camo.githubusercontent.com/1b607c4ade9a8a491e8577b7e251dc86a873212e925b9a64a6931aaef50a4439/68747470733a2f2f692e696d6775722e636f6d2f636c733758434b2e676966',
          'https://camo.githubusercontent.com/1a54ae3b63e89d183a650865016f078791b72e1fcd0a99f0517355072fba5240/68747470733a2f2f692e696d6775722e636f6d2f5775346f6e634c2e676966',
        ],
        description: t('sessionProjects.projects.doctorAgenda.description'),
        objectives: t('sessionProjects.projects.doctorAgenda.objectives'),
        technologies: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Shadcn UI',
          'Tanstack query',
          'React hook form',
          'Charts.js',
          'Zod',
          'Dayjs',
          'React Number Format',
          'Drizzle',
          'Stripe',
          'PostgreSQL',
          'next-safe-action',
          'Better-Auth',
        ],
        challengesEndSolutions: t('sessionProjects.projects.doctorAgenda.challengesEndSolutions'),
        repository: 'https://github.com/Alessandro-Vieira77/doutor-agenda.git',
        deploy: 'https://doutor-agenda-one-gamma.vercel.app/',
      },
      categorys: ['Clinic', 'Sass', 'Dashboard', 'Full Stack'],
    },
    {
      name: 'Task Manager',
      image:
        'https://image2url.com/r2/default/gifs/1768490815887-38c76647-0a03-42d8-aca4-0bca57b6b11f.gif',
      projectContent: {
        gallery: [
          'https://image2url.com/r2/default/gifs/1768491223980-3fe2a6d0-fe08-485d-9e84-4e559f7aa467.gif',
          'https://image2url.com/r2/default/gifs/1768491514106-51f4afc2-a605-4a07-b77c-eff0f8e8faa8.gif',
          'https://image2url.com/r2/default/gifs/1768491824353-b32a384b-d819-4cb2-90d3-2a28867d450e.gif',
        ],
        description: t('sessionProjects.projects.taskManager.description'),
        objectives: t('sessionProjects.projects.taskManager.objectives'),
        technologies: [
          'React',
          'JavaScript',
          'Tailwind CSS',
          'Tailwind variants',
          'React router',
          'Tanstack query',
          'React hook form',
          'Zod',
          'Axios',
          'React transition group',
        ],
        challengesEndSolutions: t('sessionProjects.projects.taskManager.challengesEndSolutions'),
        repository: 'https://github.com/Alessandro-Vieira77/task-manager.git',
        deploy: 'https://task-manager-sandy-omega.vercel.app/',
      },
      categorys: ['Code', 'React', 'Components', 'Tasks'],
    },
  ]

  const skills = [
    {
      frontEnd: [
        {
          name: 'JavaScript',
        },
        {
          name: 'React',
        },
        {
          name: 'Next.js',
        },
        {
          name: 'Tailwind CSS',
        },
        {
          name: 'TypeScript',
        },
        {
          name: 'React-query',
        },
        {
          name: 'Redux',
        },
        {
          name: 'testing-library',
        },
      ],
    },
    {
      backEnd: [
        {
          name: 'Node.js',
        },
        {
          name: 'Express.js',
        },
        {
          name: 'Docker',
        },
      ],
    },
    {
      databaseAndTools: [
        {
          name: 'MongoDB',
        },
        {
          name: 'PostgreSQL',
        },
        {
          name: 'Git/GitHub',
        },
        {
          name: 'Figma',
        },
        {
          name: 'Drizzle',
        },
        {
          name: 'Prisma',
        },
      ],
    },
  ]

  return <Context.Provider value={{ projects, skills }}>{children}</Context.Provider>
}
