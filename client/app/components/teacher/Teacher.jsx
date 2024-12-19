'use client'
import React, { useEffect, useState } from 'react'
import { 
  Users, 
  GraduationCap, 
  ClipboardList, 
  BookOpen, 
  BarChart2, 
  MessageSquare, 
  Calendar, 
  LogOut, 
  Settings 
} from 'lucide-react'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'

// Mock data for dashboard
const teacherData = {
  name: 'Sarah Johnson',
  subject: 'Computer Science',
  classes: [
    { 
      id: 1, 
      name: 'CS 101', 
      students: 25, 
      pendingAssignments: 12 
    },
    { 
      id: 2, 
      name: 'Web Development', 
      students: 20, 
      pendingAssignments: 8 
    }
  ],
  recentActivity: [
    { 
      id: 1, 
      type: 'Assignment', 
      description: 'Graded Java Programming Assignment', 
      time: '2 hours ago' 
    },
    { 
      id: 2, 
      type: 'Message', 
      description: 'Received query from student about exam', 
      time: '4 hours ago' 
    }
  ]
}

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard')
  const {user, logout} = useAuth();
  const router = useRouter()

   useEffect(() => {
      if (!user) {
        router.push('/'); // Redirect to the home page or login page if not logged in
      }
    }, [user, router]);
  
    if (!user) {
      return null; // Optionally show a loading state while redirecting
    }

  const DashboardCard = ({ icon: Icon, title, value, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 hover:shadow-lg transition-all">
      <div className={`p-3 rounded-full ${color} bg-opacity-20`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
  )

  const SidebarMenuItem = ({ icon: Icon, label, section }) => (
    <button 
      onClick={() => setActiveSection(section)}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all 
        ${activeSection === section 
          ? 'bg-blue-100 text-blue-700' 
          : 'hover:bg-gray-100 text-gray-600'}`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6 space-y-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{teacherData.subject}</p>
          </div>
        </div>

        <nav className="space-y-2">
          <SidebarMenuItem icon={BarChart2} label="Dashboard" section="dashboard" />
          <SidebarMenuItem icon={Users} label="Students" section="students" />
          <SidebarMenuItem icon={ClipboardList} label="Assignments" section="assignments" />
          <SidebarMenuItem icon={BookOpen} label="Courses" section="courses" />
          <SidebarMenuItem icon={MessageSquare} label="Messages" section="messages" />
          <SidebarMenuItem icon={Calendar} label="Schedule" section="schedule" />
          <SidebarMenuItem icon={Settings} label="Settings" section="settings" />
        </nav>

        <button onClick={logout} className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <DashboardCard 
            icon={Users} 
            title="Total Students" 
            value={teacherData.classes.reduce((sum, cls) => sum + cls.students, 0)}
            color="text-blue-500"
          />
          <DashboardCard 
            icon={ClipboardList} 
            title="Pending Assignments" 
            value={teacherData.classes.reduce((sum, cls) => sum + cls.pendingAssignments, 0)}
            color="text-yellow-500"
          />
          <DashboardCard 
            icon={BookOpen} 
            title="Active Courses" 
            value={teacherData.classes.length}
            color="text-green-500"
          />
          <DashboardCard 
            icon={MessageSquare} 
            title="Unread Messages" 
            value={3}
            color="text-red-500"
          />
        </div>

        {/* Recent Activity & Classes */}
        <div className="grid grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            {teacherData.recentActivity.map(activity => (
              <div key={activity.id} className="border-b py-3 last:border-b-0 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{activity.description}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {activity.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* My Classes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">My Classes</h2>
            {teacherData.classes.map(cls => (
              <div key={cls.id} className="border-b py-3 last:border-b-0 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{cls.name}</p>
                    <p className="text-sm text-gray-500">{cls.students} Students</p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    {cls.pendingAssignments} Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherDashboard