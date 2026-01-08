export function SocialNetwork({ icon, text }) {
  return (
    <div className="text-md flex w-full transform items-center gap-2 rounded-lg px-2 py-3 transition-all hover:scale-[1.04] hover:bg-[#bbe0ef] sm:gap-4 sm:px-4">
      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#3674B5] bg-[#bbe0ef]">
        {icon}
      </div>{' '}
      <p className="text-xs text-[#6B4F4F] hover:text-black sm:text-sm">{text}</p>
    </div>
  )
}
