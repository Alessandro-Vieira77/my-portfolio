import { Header } from './components/header'
import { Menu } from './components/menu'
import { useTranslation } from 'react-i18next'
import { Home } from './components/sessions/home'
import { Projects } from './components/sessions/projects'
import { About } from './components/sessions/about'
import { Education } from './components/sessions/education'
import { Contact } from './components/sessions/contact'

export default function App() {
  const { t } = useTranslation()
  return (
    <div id="container" className="flex min-h-screen w-full flex-col">
      <Menu />
      <Header />
      <main className="w-full">
        <Home id={t('header.home').toLowerCase()} />
        <Projects id={t('header.projects').toLowerCase()} />
        <About id={t('header.about').toLowerCase()} />
        <Education id={t('header.education').toLowerCase()} />
        <Contact id={t('header.contact').toLowerCase()} />
      </main>
    </div>
  )
}
