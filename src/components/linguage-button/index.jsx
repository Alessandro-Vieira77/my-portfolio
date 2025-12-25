import { Heart } from 'lucide-react'

export default function LanguageButton({ L1, L2, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex cursor-pointer items-center gap-2 rounded-[32px] bg-[#cd5c5c] px-5 py-2.5 text-lg transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:transform hover:bg-[#b84c4c] hover:shadow-xl"
    >
      <Heart size={16} className="text-black" />{' '}
      <div className="flex items-center gap-1">
        <p className="cabin-bold text-sm text-black">{L1}</p> |{' '}
        <p className="cabin-bold text-sm text-white">{L2}</p>
      </div>
    </button>
  )
}
