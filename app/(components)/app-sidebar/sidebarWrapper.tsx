export function SidebarItemWrapper({
    as: Component,
    children,
    ...props
  }: {
    as: React.ElementType;
    children: React.ReactNode;
  } & Record<string, unknown>) {
    return (
      <Component
        className="group flex items-center gap-x-3 rounded-lg px-3 py-2.5 w-full text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        {...props}
      >
        {children}
      </Component>
    )
  }