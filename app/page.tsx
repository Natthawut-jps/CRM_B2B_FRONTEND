import { redirect } from "next/navigation";
import { Avatared } from "./components/avatar";
import { Notification } from "./components/notification";
import { Search } from "./components/search";
import { UserMenu } from "./components/user-menu";

export default function Home() {
  redirect("/dashboad")
}
