export function BadgeComponent({ icon, title }) {
  return (
    <div className="flex h-12 w-full items-center justify-center space-x-2 rounded-lg border border-white bg-[#ffffff80]">
      {icon} <p>{title}</p>
    </div>
  )
}
