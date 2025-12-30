export function SocialNetwork({ icon, text }) {
  return (
    <div className="text-md flex transform items-center gap-4 rounded-lg px-4 py-3 transition-all hover:scale-[1.04] hover:bg-[#bbe0ef]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#3674B5] bg-[#bbe0ef]">
        {icon}
      </div>{' '}
      <span className="text-sm text-[#6B4F4F] hover:text-black">{text}</span>
    </div>
  )
}
