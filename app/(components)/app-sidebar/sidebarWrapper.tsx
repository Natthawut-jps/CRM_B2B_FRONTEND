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
        className="flex gap-x-2.5 p-3 w-full hover:bg-accent/10"
        {...props}
      >
        {children}
      </Component>
    )
  }