"use client"

import { useState } from "react"
import { Bell, Search, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

export default function AdminHeader() {
  const router = useRouter()
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message received",
      description: "You have a new message from John Doe",
      time: "2 min ago",
      read: false,
    },
    {
      id: 2,
      title: "Project completed",
      description: "EcoShop project has been marked as completed",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "New comment on blog post",
      description: "Sarah left a comment on your post",
      time: "3 hours ago",
      read: true,
    },
  ])

  const unreadCount = notifications.filter((n) => !n.read).length

  const handleLogout = () => {
    // In a real app, handle logout logic here
    router.push("/admin/login")
  }

  const markAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <header className="bg-background border-b border-border/50 h-16">
      <div className="flex h-full justify-between items-center px-4">
        <div className="w-72 lg:w-80">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="w-full pl-10 h-9" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white">
                    {unreadCount}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex justify-between items-center px-4 py-2 border-b border-border/50">
                <h3 className="font-medium">Notifications</h3>
                <Button variant="ghost" size="sm" className="text-xs h-auto p-1">
                  Mark all as read
                </Button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="px-4 py-8 text-center text-muted-foreground">No notifications</div>
                ) : (
                  notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 border-b border-border/50 last:border-0 ${!notification.read ? "bg-muted/50" : ""}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{notification.description}</p>
                    </div>
                  ))
                )}
              </div>
              <DropdownMenuSeparator />
              <div className="p-2 text-center">
                <Button variant="ghost" size="sm" className="text-xs w-full h-auto p-1">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

