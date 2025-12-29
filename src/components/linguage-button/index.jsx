import { Heart } from 'lucide-react'
import HeartSvg from '@/assets/heart-svgrepo-com.svg?react'

export function LanguageButton({ L1, L2, onClick, color, colorL1, colorL2 }) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 rounded-[32px] bg-[#3674B5] px-5 py-2.5 text-lg transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:transform hover:bg-[#647FBC] hover:shadow-xl"
    >
      <HeartSvg className={`h-5 w-5 ${color}`} />{' '}
      <div className="flex items-center gap-1">
        <p className={`cabin-bold text-sm ${colorL1}`}>{L1}</p> <p className="pb-1 font-bold">|</p>
        <p className={`cabin-bold text-sm ${colorL2}`}>{L2}</p>
      </div>
    </button>
  )
}
