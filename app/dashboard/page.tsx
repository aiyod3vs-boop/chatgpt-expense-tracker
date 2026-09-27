import {redirect} from "next/navigation"; import {getCurrentMember} from "@/lib/auth"; import Dashboard from "@/components/Dashboard";
export default async function Page(){const m=await getCurrentMember();if(!m)redirect("/login");return <Dashboard initialUser={{name:m.name,household:m.household.name}}/>}
