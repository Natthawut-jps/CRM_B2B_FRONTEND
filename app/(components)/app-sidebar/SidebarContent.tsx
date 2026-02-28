export function SidebarItemContent({ icon: Icon, name, open }: {
  icon: React.ElementType
  name: string
  open: boolean
}) {
  return (
    <>
      <Icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      <span className={`text_sidebar hidden ${open ? "sm:hidden" : "sm:block"} w-full truncate text-[13px] leading-5`}>{name}</span>
    </>
  )
}