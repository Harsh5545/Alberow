"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Home, BarChart, FileText, Users, Settings, ShoppingCart, Mail, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarGroupLabel,
  SidebarGroup,
} from "@/components/ui/sidebar" // Using shadcn sidebar component [^1]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState({
    content: true,
    sales: false,
  })

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const isActive = (path) => pathname === path

  return (
    <SidebarProvider>
      <Sidebar variant="sidebar" collapsible="icon">
        <SidebarHeader className="flex justify-between items-center py-3">
          <Link href="/admin" className="flex items-center px-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white mr-3">
              A
            </div>
            <span className="text-lg font-bold">Alberow</span>
          </Link>
          <SidebarTrigger />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/admin")} tooltip="Dashboard">
                  <Link href="/admin">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/admin/analytics")} tooltip="Analytics">
                  <Link href="/admin/analytics">
                    <BarChart className="h-4 w-4" />
                    <span>Analytics</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Content</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => toggleMenu("content")}>
                  <FileText className="h-4 w-4" />
                  <span>Content</span>
                  <ChevronDown
                    className={cn("ml-auto h-4 w-4 transition-transform", openMenus.content && "rotate-180")}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {openMenus.content && (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/admin/blog")} tooltip="Blog">
                      <Link href="/admin/blog">
                        <FileText className="h-4 w-4" />
                        <span>Blog Posts</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/admin/pages")} tooltip="Pages">
                      <Link href="/admin/pages">
                        <LayoutGrid className="h-4 w-4" />
                        <span>Pages</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              )}

              <SidebarMenuItem>
                <SidebarMenuButton onClick={() => toggleMenu("sales")}>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Sales</span>
                  <ChevronDown
                    className={cn("ml-auto h-4 w-4 transition-transform", openMenus.sales && "rotate-180")}
                  />
                </SidebarMenuButton>
              </SidebarMenuItem>

              {openMenus.sales && (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/admin/orders")} tooltip="Orders">
                      <Link href="/admin/orders">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Orders</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/admin/customers")} tooltip="Customers">
                      <Link href="/admin/customers">
                        <Users className="h-4 w-4" />
                        <span>Customers</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              )}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>System</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/admin/settings")} tooltip="Settings">
                  <Link href="/admin/settings">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/admin/messages")} tooltip="Messages">
                  <Link href="/admin/messages">
                    <Mail className="h-4 w-4" />
                    <span>Messages</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="px-3 py-2">
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                  A
                </div>
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@alberow.com</p>
                </div>
              </div>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

