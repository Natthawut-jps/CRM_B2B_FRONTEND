'use client'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Building2Icon, CalendarDaysIcon, ChartBarIcon, ChevronDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ContactIcon, HeadsetIcon, LayoutDashboardIcon, MegaphoneIcon, TargetIcon, TrendingUpIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarItemContent } from "./SidebarContent";
import { SidebarItemWrapper } from "./sidebarWrapper";

export function AppSidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState<boolean>(false)
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
        <div className={`shadow drop-shadow-accent min-h-screen border-r border-r-[#737373] z-50  ${open ? 'absolute bg-black sm:relative' : 'space-y-2 relative lg:min-w-3xs md:min-w-[200px]'}`}>
            <div className="flex justify-between items-center p-2">
                <div className={`text_sidebar uppercase hidden ${open ? "sm:hidden" : "sm:block"}`}>
                    {"brandner"}
                </div>
                <div>
                    <ChevronsLeftIcon className={open ? 'block cursor-pointer' : 'hidden'} onClick={() => setOpen(prev => !prev)} />
                    <ChevronsRightIcon className={open ? 'hidden' : 'block cursor-pointer'} onClick={() => setOpen(prev => !prev)} />
                </div>
            </div>
            <div className={`${open ? 'mt-5' : 'm-0 p-0'} `}>
                {sideBar.map(({ title, items }, index) => (
                    <div key={index}>

                        {title !== null && (
                            <div>
                                {title}
                            </div>
                        )}
                        {items.map(({ name, href, Icon, chidern }, index) => {
                            if (chidern.length > 0) {
                                return (
                                    <div key={index}>
                                        <Collapsible>
                                            <CollapsibleTrigger asChild>
                                                <div className="group flex justify-between items-center pr-2 cursor-pointer">
                                                    <SidebarItemWrapper as="div">
                                                        <SidebarItemContent icon={Icon} name={name} open={open} />
                                                    </SidebarItemWrapper>
                                                    <ChevronDownIcon className={`group-data-[state=open]:rotate-180 text_sidebar hidden ${open ? "sm:hidden" : "sm:block"}`} />
                                                </div>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <div className={`text_sidebar ${open ? "sm:hidden flex flex-col" : "sm:flex flex-col"} w-full`}>
                                                    {chidern.map((wrapper, index) => {
                                                        const isParentActive = pathname === href && href === wrapper.href
                                                        const isChildActive = pathname.startsWith(wrapper.href) && wrapper.href !== href
                                                        const isActive = isChildActive || isParentActive
                                                        return (
                                                            <Link key={index} className={`pl-6 p-3 ${isActive && "bg-accent/30 hover:opacity-20"}`} href={wrapper.href}>{wrapper.name}</Link>
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
                                    <div key={index} className={`${isActive && "bg-accent/30"} cursor-pointer`}>
                                        <SidebarItemWrapper as={Link} href={href}>
                                            <SidebarItemContent icon={Icon} name={name} open={open} />
                                        </SidebarItemWrapper>
                                    </div>
                                )
                            }
                            // return (
                            //     <Link href={href} key={index} className={`flex gap-x-2.5 p-3 cursor-pointer w-full hover:bg-accent/10 ${isActive && "bg-accent/30"}`}>
                            //         <span>
                            //             <Icon />
                            //         </span>
                            //         <div className={`text_sidebar hidden ${open ? "sm:hidden" : "sm:block"} w-full`}>
                            //             <p>{name}</p>
                            //         </div>
                            //     </Link>
                            // )
                        })
                        }
                    </div>

                ))}
            </div>
        </div>
    )
}