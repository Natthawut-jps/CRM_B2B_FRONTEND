export function SidebarItemContent({ icon: Icon, name, open }: {
  icon: React.ElementType
  name: string
  open: boolean
}) {
  return (
    <>
      <Icon />
      <span className={`text_sidebar hidden ${open ? "sm:hidden" : "sm:block"} w-full`}>{name}</span>
    </>
  )
}