"use client";
import React, { useEffect, useState } from "react";
import {
  Users,
  GraduationCap,
  ClipboardList,
  BookOpen,
  BarChart2,
  MessageSquare,
  Calendar,
  LogOut,
  Settings,
  Plus,
  X,
} from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

// Mock data for dashboard
const teacherData = {
  name: "Sarah Johnson",
  subject: "Computer Science",
  subjects: [
    "Computer Science",
    "Web Development",
    "Programming",
    "Data Structures",
    "Algorithms",
  ],
  classes: [
    {
      id: 1,
      name: "CS 101",
      students: 25,
      pendingAssignments: 12,
    },
    {
      id: 2,
      name: "Web Development",
      students: 20,
      pendingAssignments: 8,
    },
  ],
  recentActivity: [
    {
      id: 1,
      type: "Assignment",
      description: "Graded Java Programming Assignment",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "Message",
      description: "Received query from student about exam",
      time: "4 hours ago",
    },
  ],
};

const TeacherDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showQuestionModal, setShowQuestionModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [questions, setQuestions] = useState([]);
  const [recentActivity, setRecentActivity] = useState(
    teacherData.recentActivity
  );
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    const selectedClassName = teacherData.classes.find(
      (cls) => cls.id === parseInt(selectedClass)
    )?.name;

    // Create new question object
    const newQuestion = {
      id: questions.length + 1,
      question,
      subject: selectedSubject,
      className: selectedClassName,
      classId: parseInt(selectedClass),
      date: new Date().toISOString(),
      status: "Pending",
      responses: 0,
    };

    // Add question to questions list
    setQuestions([newQuestion, ...questions]);

    // Add to recent activity
    const newActivity = {
      id: recentActivity.length + 1,
      type: "Question",
      description: `Added new question to ${selectedClassName}`,
      time: "Just now",
    };
    setRecentActivity([newActivity, ...recentActivity]);

    // Reset form
    setQuestion("");
    setSelectedClass("");
    setSelectedSubject("");
    setShowQuestionModal(false);
  };

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
  );

  const SidebarMenuItem = ({ icon: Icon, label, section }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all 
        ${
          activeSection === section
            ? "bg-blue-100 text-blue-700"
            : "hover:bg-gray-100 text-gray-600"
        }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );

  const renderMainContent = () => {
    if (activeSection === "assignments") {
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Questions & Assignments
            </h2>
            <button
              onClick={() => setShowQuestionModal(true)}
              className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Add Question</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="space-y-4">
                {questions.map((q) => (
                  <div
                    key={q.id}
                    className="border-b last:border-b-0 pb-4 last:pb-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="font-bold text-gray-800">{q.subject}</h1>
                        <h3 className="font-medium text-gray-800">
                          {q.question}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Class: {q.className}
                        </p>
                        <p className="text-sm text-gray-500">
                          Posted: {new Date(q.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs mb-2">
                          {q.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {q.responses} responses
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {questions.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No questions added yet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={() => setShowQuestionModal(true)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Question</span>
          </button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <DashboardCard
            icon={Users}
            title="Total Students"
            value={teacherData.classes.reduce(
              (sum, cls) => sum + cls.students,
              0
            )}
            color="text-blue-500"
          />
          <DashboardCard
            icon={ClipboardList}
            title="Pending Assignments"
            value={teacherData.classes.reduce(
              (sum, cls) => sum + cls.pendingAssignments,
              0
            )}
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
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="border-b py-3 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">
                      {activity.description}
                    </p>
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
            {teacherData.classes.map((cls) => (
              <div
                key={cls.id}
                className="border-b py-3 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-700">{cls.name}</p>
                    <p className="text-sm text-gray-500">
                      {cls.students} Students
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                    {cls.pendingAssignments} Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

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
          <SidebarMenuItem
            icon={BarChart2}
            label="Dashboard"
            section="dashboard"
          />
          <SidebarMenuItem icon={Users} label="Students" section="students" />
          <SidebarMenuItem
            icon={ClipboardList}
            label="Assignments"
            section="assignments"
          />
          <SidebarMenuItem icon={BookOpen} label="Courses" section="courses" />
          <SidebarMenuItem
            icon={MessageSquare}
            label="Messages"
            section="messages"
          />
          <SidebarMenuItem
            icon={Calendar}
            label="Schedule"
            section="schedule"
          />
          <SidebarMenuItem
            icon={Settings}
            label="Settings"
            section="settings"
          />
        </nav>

        <button
          onClick={logout}
          className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {renderMainContent()}

        {/* Add Question Modal */}
        {showQuestionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-96">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Add Question</h2>
                <button
                  onClick={() => setShowQuestionModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmitQuestion}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Class
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a class</option>
                    {teacherData.classes.map((cls) => (
                      <option key={cls.id} value={cls.id}>
                        {cls.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Select Subject
                  </label>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    {teacherData.subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Question
                  </label>
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    required
                    placeholder="Enter your question here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeacherDashboard;
