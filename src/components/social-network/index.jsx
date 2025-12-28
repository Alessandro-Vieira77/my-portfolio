export function SocialNetwork({ icon, text }) {
  return (
    <div className="text-md flex transform items-center gap-4 rounded-lg px-4 py-3 transition-all hover:scale-[1.04] hover:bg-[#fff0f5]">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D38AA3] bg-[#fff0f5]">
        {icon}
      </div>{' '}
      <p className="text-sm text-[#6B4F4F] hover:text-black">{text}</p>
    </div>
  )
}
