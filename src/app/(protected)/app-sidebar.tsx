"use client"

import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Bot, CreditCard, LayoutDashboard, Plus, Presentation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items =[
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard
  },
  {
    title: "Q&A",
    url: "/qa",
    icon: Bot
  },
  {
    title: "Meeting",
    url: "/meeting",
    icon: Presentation
  },
  {
    title: "Billing",
    url: "/billing",
    icon: CreditCard
  },
]

const projects = [
  {
    name: "Project-1"
  },
  {
    name: "Project-2"
  },

  {
    name: "Project-3"
  },
  {
    name: "Project-4"
  },
]

export function AppSidebar (){
  const pathname = usePathname()
  const {open} = useSidebar()
  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" height={40} width={40}/>
          {
          open && <h1 className="text-xl font-bold text-primary/80">GitAsssist</h1>
          }

        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             {
              items.map((item )=> {
                return(
                  <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className={cn({
                          "!bg-primary !text-white" : pathname === item.url
                        })}>
                          <item.icon/>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })
             }
             </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
             {
              projects.map((item )=> {
                return(
                  <SidebarMenuItem key={item.name}>
                      <SidebarMenuButton asChild>
                       <div className="">
                        <div className={cn(
                          "rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary",{
                            "bg-primary text-white" : true
                          }
                        )}>
                          {item.name[0]}
                        </div>
                        <span>{item.name}</span>
                       </div>
                      </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })
             }
             {
              open && (
                <SidebarMenuItem>
                <div className="h-2"></div>
                <Link href="/create">
                <Button variant="outline" size="sm" className="w-fit">
                 <Plus/>
                 Create Project
                </Button>
                </Link>
                </SidebarMenuItem>
              )
             }

             </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
