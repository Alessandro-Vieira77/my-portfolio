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
      name: 'Fin Track',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      image: 'https://i.imgur.com/KhCqZyA.png',
      gallery: [
        'https://i.imgur.com/KhCqZyA.png',
        'https://i.imgur.com/aEM1VPC.png',
        'https://i.imgur.com/qBAUf2p.png',
      ],
      categorys: ['Project', 'Design', 'Code', 'Full Stack'],
    },
    {
      name: 'Fin Track',
      description: 'Gerenciamento de finanças pessoais',
      image: 'https://i.imgur.com/KhCqZyA.png',
      gallery: [
        'https://i.imgur.com/KhCqZyA.png',
        'https://i.imgur.com/aEM1VPC.png',
        'https://i.imgur.com/qBAUf2p.png',
      ],
      categorys: ['Project', 'Design', 'Code', 'Full Stack'],
    },
    {
      name: 'Fin Track',
      description: 'Gerenciamento de finanças pessoais',
      image: 'https://i.imgur.com/KhCqZyA.png',
      gallery: [
        'https://i.imgur.com/KhCqZyA.png',
        'https://i.imgur.com/aEM1VPC.png',
        'https://i.imgur.com/qBAUf2p.png',
      ],
      categorys: ['Project', 'Design', 'Code', 'Full Stack'],
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
