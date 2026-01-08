import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { SocialNetwork } from '../social-network'
import { FormMsg } from '../form-msg'
import { useTranslation } from 'react-i18next'

export function Contact({ id }) {
  const { t } = useTranslation()
  return (
    <section
      id={id}
      className="flex min-h-screen w-full flex-col items-center gap-20 bg-[#FDFBF7] bg-[linear-gradient(#E8E8E8_1px,transparent_1px),linear-gradient(90deg,#E8E8E8_1px,transparent_1px)] bg-[length:30px_30px] px-4 pt-28 sm:px-16"
    >
      <div className="grid w-full grid-cols-[1fr] gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="flex w-full flex-col gap-4">
          <h2 className="caveat-bold relative z-1 block h-13 text-4xl md:h-17 md:text-6xl">
            {t('sessionContact.conversation.title')}
          </h2>
          <p className="cabin-regular text-sm leading-normal text-[#6B4F4F] md:text-lg">
            {t('sessionContact.conversation.description1')}
          </p>
          <p className="cabin-regular text-sm leading-normal text-[#6B4F4F] md:text-lg">
            {t('sessionContact.conversation.description2')}
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-md">
          <a href="mailto:valessandrovieira@gmail.com">
            <SocialNetwork
              icon={<Mail color="#3674B5" className="size-3 sm:size-6" />}
              text="valessandrovieira@gmail.com"
            />
          </a>
          <a href="https://www.linkedin.com/in/alessandro-vieira02" target="_blank">
            <SocialNetwork
              icon={<Linkedin color="#3674B5" className="w-3" />}
              text="/alessandro-vieira02"
            />
          </a>

          <a href="https://github.com/Alessandro-Vieira77" target="_blank">
            <SocialNetwork
              icon={<Github color="#3674B5" className="size-3 sm:size-6" />}
              text="/Alessandro-Vieira77"
            />
          </a>

          <a href="https://wa.me/5598985825422" target="_blank">
            <SocialNetwork
              icon={<MessageCircle color="#3674B5" className="size-3 sm:size-6" />}
              text={`Whatsapp (${t('sessionContact.conversation.chat')})`}
            />
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center pb-10">
        <FormMsg />
      </div>
    </section>
  )
}
