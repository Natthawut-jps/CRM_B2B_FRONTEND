import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleQuestionMarkIcon, EllipsisVerticalIcon, FileTextIcon, LogOutIcon, SettingsIcon } from "lucide-react";
import { Suspense } from "react";
import { Notification } from "./notification";
import { Search } from "./search";
export type DataType = {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}
export  function TopBar() {

    return (
        <div className=" w-full max-w-7xl mx-auto p-1">
            <div className="flex w-full h-fit p-2.5 space-x-1.5">
                <strong className="flex items-start">
                        {"Admin"}
                </strong>
                <div className="flex flex-wrap-reverse items-center justify-end gap-2.5 h-fit w-full">
                    <Search />
                    <div className="flex gap-2.5 w-fit items-center">
                        <Notification />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex space-x-1.5 cursor-pointer">
                                    <div>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="flex justify-center items-center space-x-2.5">
                                        <div className="text-[12px] leading-3.5">
                                            <Suspense fallback={<p>......</p>}>
                                                <p>
                                                    jhon smith
                                                </p>
                                                <p className="text-[#737373]">
                                                    example@gmail.com
                                                </p>
                                            </Suspense>
                                        </div>
                                        <p>
                                            <EllipsisVerticalIcon size={16} color="#737373" />
                                        </p>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40" align="start">
                                <DropdownMenuGroup className="font-semibold">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuItem></DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <CircleQuestionMarkIcon />
                                        Help Center
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <FileTextIcon />
                                        Release Notes
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <SettingsIcon />
                                        Setting
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem aria-expanded className="text-red-400 focus:text-red-400">
                                        <LogOutIcon />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}