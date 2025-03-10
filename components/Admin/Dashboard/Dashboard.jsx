"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts"
import { ArrowUpRight, Users, FileText, ShoppingCart, DollarSign, Clock, CheckCircle2, AlertCircle, MoreHorizontal, Calendar } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import AdminLayout from "@/app/admin/page"

// Sample data
const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7000 },
  { name: 'Aug', revenue: 8000 },
  { name: 'Sep', revenue: 7500 },
  { name: 'Oct', revenue: 9000 },
  { name: 'Nov', revenue: 8500 },
  { name: 'Dec', revenue: 10000 },
]

const projectStatusData = [
  { name: 'Completed', value: 45, color: '#10b981' },
  { name: 'In Progress', value: 30, color: '#3b82f6' },
  { name: 'Planning', value: 15, color: '#8b5cf6' },
  { name: 'On Hold', value: 10, color: '#f59e0b' },
]

const serviceDistributionData = [
  { name: 'Web Development', value: 40 },
  { name: 'UI/UX Design', value: 25 },
  { name: 'Digital Marketing', value: 20 },
  { name: 'E-commerce', value: 15 },
]

const recentProjects = [
  {
    id: 1,
    name: 'Artisan Cafe Rebrand',
    client: 'Artisan Cafe',
    status: 'Completed',
    progress: 100,
    dueDate: '2025-01-15',
    team: [
      { name: 'Alex J', avatar: '/placeholder.svg?height=32&width=32&text=AJ' },
      { name: 'Sophia C', avatar: '/placeholder.svg?height=32&width=32&text=SC' },
      { name: 'Marcus W', avatar: '/placeholder.svg?height=32&width=32&text=MW' },
    ]
  },
  {
    id: 2,
    name: 'EcoShop E-commerce Platform',
    client: 'EcoShop',
    status: 'In Progress',
    progress: 75,
    dueDate: '2025-02-28',
    team: [
      { name: 'Marcus W', avatar: '/placeholder.svg?height=32&width=32&text=MW' },
      { name: 'David K', avatar: '/placeholder.svg?height=32&width=32&text=DK' },
    ]
  },
  {
    id: 3,
    name: 'TechPro App UI Design',
    client: 'TechPro',
    status: 'In Progress',
    progress: 60,
    dueDate: '2025-03-15',
    team: [
      { name: 'Sophia C', avatar: '/placeholder.svg?height=32&width=32&text=SC' },
      { name: 'David K', avatar: '/placeholder.svg?height=32&width=32&text=DK' },
    ]
  },
  {
    id: 4,
    name: 'Global Finance SEO Campaign',
    client: 'Global Finance',
    status: 'Planning',
    progress: 30,
    dueDate: '2025-04-10',
    team: [
      { name: 'Olivia M', avatar: '/placeholder.svg?height=32&width=32&text=OM' },
      { name: 'Emma W', avatar: '/placeholder.svg?height=32&width=32&text=EW' },
    ]
  },
  {
    id: 5,
    name: 'Fitness Tracker Website',
    client: 'FitLife',
    status: 'On Hold',
    progress: 45,
    dueDate: '2025-03-30',
    team: [
      { name: 'Marcus W', avatar: '/placeholder.svg?height=32&width=32&text=MW' },
      { name: 'David K', avatar: '/placeholder.svg?height=32&width=32&text=DK' },
      { name: 'Alex J', avatar: '/placeholder.svg?height=32&width=32&text=AJ' },
    ]
  },
]

const recentActivities = [
  {
    id: 1,
    user: 'Alex Johnson',
    avatar: '/placeholder.svg?height=32&width=32&text=AJ',
    action: 'completed',
    target: 'Artisan Cafe Rebrand',
    time: '2 hours ago',
  },
  {
    id: 2,
    user: 'Sophia Chen',
    avatar: '/placeholder.svg?height=32&width=32&text=SC',
    action: 'uploaded',
    target: 'new design files for TechPro App',
    time: '4 hours ago',
  },
  {
    id: 3,
    user: 'Marcus Williams',
    avatar: '/placeholder.svg?height=32&width=32&text=MW',
    action: 'commented on',
    target: 'EcoShop E-commerce Platform',
    time: 'Yesterday',
  },
  {
    id: 4,
    user: 'Olivia Martinez',
    avatar: '/placeholder.svg?height=32&width=32&text=OM',
    action: 'started',
    target: 'Global Finance SEO Campaign',
    time: 'Yesterday',
  },
  {
    id: 5,
    user: 'David Kim',
    avatar: '/placeholder.svg?height=32&width=32&text=DK',
    action: 'updated',
    target: 'UI designs for Fitness Tracker',
    time: '2 days ago',
  },
]

const upcomingDeadlines = [
  {
    id: 1,
    task: 'Submit final designs for TechPro App',
    project: 'TechPro App UI Design',
    dueDate: '2025-01-20',
    assignee: 'David Kim',
    avatar: '/placeholder.svg?height=32&width=32&text=DK',
    priority: 'High',
  },
  {
    id: 2,
    task: 'Complete homepage development',
    project: 'EcoShop E-commerce Platform',
    dueDate: '2025-01-25',
    assignee: 'Marcus Williams',
    avatar: '/placeholder.svg?height=32&width=32&text=MW',
    priority: 'Medium',
  },
  {
    id: 3,
    task: 'Prepare SEO audit report',
    project: 'Global Finance SEO Campaign',
    dueDate: '2025-01-30',
    assignee: 'Olivia Martinez',
    avatar: '/placeholder.svg?height=32&width=32&text=OM',
    priority: 'High',
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'bg-green-500/10 text-green-500 border-green-500/20'
    case 'In Progress':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    case 'Planning':
      return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
    case 'On Hold':
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
  }
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return 'bg-red-500/10 text-red-500 border-red-500/20'
    case 'Medium':
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    case 'Low':
      return 'bg-green-500/10 text-green-500 border-green-500/20'
    default:
      return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
  }
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Admin User</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Jan 10, 2025
            </Button>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full md:w-auto grid-cols-2 md:grid-cols-3 gap-2">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <motion.div variants={cardVariants}>
                <Card className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      $125,430
                      <span className="text-sm text-green-500 ml-2 flex items-center">
                        +12.5% <ArrowUpRight className="h-3 w-3 ml-1" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-[60px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData.slice(-6)} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                          <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Active Clients</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      24
                      <span className="text-sm text-green-500 ml-2 flex items-center">
                        +4 <ArrowUpRight className="h-3 w-3 ml-1" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-blue-500 mr-2" />
                      <div className="text-sm text-muted-foreground">
                        5 new clients this month
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Active Projects</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      18
                      <span className="text-sm text-amber-500 ml-2 flex items-center">
                        -2 <ArrowUpRight className="h-3 w-3 ml-1 rotate-90" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-purple-500 mr-2" />
                      <div className="text-sm text-muted-foreground">
                        3 due this week
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Pending Invoices</CardDescription>
                    <CardTitle className="text-2xl flex items-center">
                      $24,500
                      <span className="text-sm text-green-500 ml-2 flex items-center">
                        -15% <ArrowUpRight className="h-3 w-3 ml-1 rotate-180" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-500 mr-2" />
                      <div className="text-sm text-muted-foreground">
                        7 invoices pending
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="lg:col-span-2"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Monthly revenue for the current year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Project Status</CardTitle>
                    <CardDescription>Distribution of project statuses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={projectStatusData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {projectStatusData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recent Projects</CardTitle>
                      <CardDescription>Status of your recent projects</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">View All</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentProjects.slice(0, 4).map((project) => (
                        <div key={project.id} className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <div className="font-medium">{project.name}</div>
                            <div className="text-sm text-muted-foreground">{project.client}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              {project.team.map((member, i) => (
                                <Avatar key={i} className="border-2 border-background h-7 w-7">
                                  <AvatarImage src={member.avatar} alt={member.name} />
                                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                              ))}
                            </div>
                            <Badge className={`${getStatusColor(project.status)}`}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Latest actions from your team</CardDescription>
                    </div>
                    <Button variant="ghost" size="sm">View All</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.slice(0, 4).map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={activity.avatar} alt={activity.user} />
                            <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="text-sm">
                              <span className="font-medium">{activity.user}</span>{' '}
                              <span>{activity.action}</span>{' '}
                              <span className="font-medium">{activity.target}</span>
                            </div>
                            <div className="text-xs text-muted-foreground">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div 
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Deadlines</CardTitle>
                    <CardDescription>Tasks due in the next 30 days</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm">View Calendar</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center justify-between">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={deadline.avatar} alt={deadline.assignee} />
                            <AvatarFallback>{deadline.assignee.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <div className="font-medium">{deadline.task}</div>
                            <div className="text-sm text-muted-foreground">{deadline.project}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-muted-foreground">
                            {new Date(deadline.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <Badge className={`${getPriorityColor(deadline.priority)}`}>
                            {deadline.priority}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Manage and track all your agency projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-lg font-medium">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={`${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit Project</DropdownMenuItem>
                              <DropdownMenuItem>Manage Team</DropdownMenuItem>
                              <DropdownMenuItem>Archive Project</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-medium">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Due: {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex -space-x-2">
                          {project.team.map((member, i) => (
                            <Avatar key={i} className="border-2 border-background">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <Button variant="outline" size="sm">View Project</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Monthly revenue for the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Distribution</CardTitle>
                  <CardDescription>Breakdown of services by revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={serviceDistributionData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {serviceDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'][index % 4]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Status Overview</CardTitle>
                <CardDescription>Current status of all projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {projectStatusData.map((status) => (
                    <Card key={status.name} className="border-l-4" style={{ borderLeftColor: status.color }}>
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold">{status.value}</div>
                        <div className="text-sm text-muted-foreground">{status.name}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={projectStatusData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8">
                        {projectStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  )
}
