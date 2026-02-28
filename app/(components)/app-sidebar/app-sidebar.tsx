'use client'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Building2Icon, CalendarDaysIcon, ChartBarIcon, ChevronDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ContactIcon, HeadsetIcon, LayoutDashboardIcon, MegaphoneIcon, TargetIcon, TrendingUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarItemContent } from "./SidebarContent";
import { SidebarItemWrapper } from "./sidebarWrapper";

export function AppSidebar({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
    const pathname = usePathname();
    const sideBar = [
        {
            title: null,
            items: [
                { name: "Dashboard", href: "/dashboard", Icon: LayoutDashboardIcon, chidern: [] },
                {
                    name: "Leads", href: "/leads", Icon: TargetIcon, chidern: [
                        { name: "All Leads", href: "/leads" }, { name: "My Leads", href: "/leads/owner" },
                        { name: "Unassigned", href: "/leads/unassigned" }, { name: "Activities", href: "/leads/activities" }
                    ]
                },
                { name: "Contacts", href: "/contacts", Icon: ContactIcon, chidern: [] },
                { name: "Companies", href: "/companies", Icon: Building2Icon, chidern: [] },
                { name: "Deals", href: "/deals", Icon: TrendingUpIcon, chidern: [] },
                { name: "Activities", href: "/activities", Icon: CalendarDaysIcon, chidern: [] },
                { name: "Reports", href: "/reports", Icon: ChartBarIcon, chidern: [] },
                { name: "Marketing", href: "/marketing", Icon: MegaphoneIcon, chidern: [] },
                { name: "Support", href: "/support", Icon: HeadsetIcon, chidern: [] },
            ]
        },
    ]
    useEffect(() => {
        document.querySelectorAll(".text_sidebar")
            .forEach(el => {
                if (open) {
                    el.classList.remove("hidden")
                } else {
                    el.classList.add("hidden")
                }
            })

    }, [open]);


    return (
        <div className={`min-h-screen z-50 border-r bg-background/60 backdrop-blur supports-backdrop-filter:bg-background/40 ${open ? "fixed inset-y-0 left-0 w-[280px] sm:static sm:w-[72px]" : "hidden sm:block sm:w-[220px] lg:w-[260px] xl:w-[280px]"} sm:sticky sm:top-0`}>
            <div className="flex justify-between items-center px-3 py-3">
                <div className={`text_sidebar uppercase hidden text-xs tracking-widest text-muted-foreground ${open ? "sm:hidden" : "sm:block"}`}>
                    {"brandner"}
                </div>
                <div>
                    <ChevronsLeftIcon className={open ? 'block cursor-pointer text-muted-foreground hover:text-foreground transition-colors' : 'hidden'} onClick={() => setOpen(!open)} />
                    <ChevronsRightIcon className={open ? 'hidden' : 'block cursor-pointer text-muted-foreground hover:text-foreground transition-colors'} onClick={() => setOpen(!open)} />
                </div>
            </div>

            <div className="px-3">
                <div className="h-px w-full bg-border/60" />
            </div>
            <div className={`${open ? 'mt-2' : 'm-0 p-0'} px-2 pb-3`}>
                {sideBar.map(({ title, items }, index) => (
                    <div key={index}>


                        {title !== null && (
                            <div>
                                {title}
                            </div>
                        )}
                        {items.map(({ name, href, Icon, chidern }, index) => {
                            if (chidern.length > 0) {
                                const isParentActive = pathname === href || pathname.startsWith(href + "/")
                                return (
                                    <div key={index}>
                                        <Collapsible>
                                            <CollapsibleTrigger asChild>
                                                <div className={`group flex justify-between items-center cursor-pointer ${isParentActive ? "bg-accent/15 text-foreground rounded-lg relative" : ""}`}>
                                                    {isParentActive && (
                                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary pointer-events-none" />
                                                    )}
                                                    <SidebarItemWrapper as="div">
                                                        <SidebarItemContent icon={Icon} name={name} open={open} />
                                                    </SidebarItemWrapper>
                                                    <ChevronDownIcon className={`group-data-[state=open]:rotate-180 text_sidebar hidden ${open ? "sm:hidden" : "sm:block"} h-4 w-4 text-muted-foreground transition-transform`} />
                                                </div>
                                            </CollapsibleTrigger>

                                            <CollapsibleContent>
                                                <div className={`text_sidebar ${open ? "sm:hidden flex flex-col" : "sm:flex flex-col"} w-full mt-1 mb-1`}>
                                                    {chidern.map((wrapper, index) => {
                                                        const isParentActive = pathname === href && href === wrapper.href
                                                        const isChildActive = pathname.startsWith(wrapper.href) && wrapper.href !== href
                                                        const isActive = isChildActive || isParentActive
                                                        return (
                                                            <Link key={index} className={`ml-4 mr-1 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground ${isActive ? "bg-accent/15 text-foreground" : ""}`} href={wrapper.href}>{wrapper.name}</Link>
                                                        )
                                                    })}
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    </div>
                                )
                            } else {
                                const isActive = pathname.startsWith(href)
                                return (
                                    <div key={index} className={`${isActive ? "bg-accent/15 text-foreground" : ""} relative rounded-lg cursor-pointer`}> 
                                        {isActive && (
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary" />
                                        )}
                                        <SidebarItemWrapper as={Link} href={href}>
                                            <SidebarItemContent icon={Icon} name={name} open={open} />
                                        </SidebarItemWrapper>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>

                ))}
            </div>
        </div>
    )
}