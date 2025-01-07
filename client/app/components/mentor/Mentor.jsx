'use client'
import React, { useState } from 'react';
import { Home, Users, FileText, Calendar, BookOpen, Settings, X } from 'lucide-react';

const MentorDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showTestCreator, setShowTestCreator] = useState(false);

  const recentTests = [
    { id: 1, name: 'Mid-term Assessment', date: '2025-01-15', submissions: 45, totalStudents: 50 },
    { id: 2, name: 'Physics Quiz', date: '2025-01-10', submissions: 28, totalStudents: 30 },
    { id: 3, name: 'Programming Test', date: '2025-01-05', submissions: 38, totalStudents: 40 }
  ];

  const upcomingTests = [
    { id: 4, name: 'Mathematics Final', date: '2025-01-20', enrolled: 55 },
    { id: 5, name: 'Chemistry Lab Test', date: '2025-01-25', enrolled: 35 }
  ];

  const handleSubmitTest = (testData) => {
    console.log('New test created:', testData);
    setShowTestCreator(false);
  };

  const TestCreationForm = ({ open, onClose, onSubmit }) => {
    const [testData, setTestData] = useState({
      name: '',
      date: '',
      duration: '',
      totalMarks: '',
      description: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(testData);
      setTestData({
        name: '',
        date: '',
        duration: '',
        totalMarks: '',
        description: ''
      });
      onClose();
    };

    if (!open) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-6 m-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Create New Test</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="test-name">
                Test Name
              </label>
              <input
                id="test-name"
                type="text"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={testData.name}
                onChange={(e) => setTestData({ ...testData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="test-date">
                Test Date
              </label>
              <input
                id="test-date"
                type="date"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={testData.date}
                onChange={(e) => setTestData({ ...testData, date: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="test-duration">
                Duration (minutes)
              </label>
              <input
                id="test-duration"
                type="number"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={testData.duration}
                onChange={(e) => setTestData({ ...testData, duration: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="total-marks">
                Total Marks
              </label>
              <input
                id="total-marks"
                type="number"
                required
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={testData.totalMarks}
                onChange={(e) => setTestData({ ...testData, totalMarks: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="test-description">
                Description
              </label>
              <textarea
                id="test-description"
                rows="3"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                value={testData.description}
                onChange={(e) => setTestData({ ...testData, description: e.target.value })}
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Create Test
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const MainContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Quick Stats */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <p className="text-sm text-gray-600">Total Students</p>
            <p className="text-2xl font-bold">150</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <p className="text-sm text-gray-600">Active Tests</p>
            <p className="text-2xl font-bold">3</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <p className="text-sm text-gray-600">Completed Tests</p>
            <p className="text-2xl font-bold">12</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <p className="text-sm text-gray-600">Average Score</p>
            <p className="text-2xl font-bold">78%</p>
          </div>
        </div>
      </div>

      {/* Recent Tests */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Recent Tests</h3>
          <button
            onClick={() => setShowTestCreator(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create New Test
          </button>
        </div>
        <div className="space-y-4">
          {recentTests.map(test => (
            <div key={test.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{test.name}</p>
                  <p className="text-sm text-gray-600">Date: {test.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">
                    Submissions: {test.submissions}/{test.totalStudents}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Tests */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Upcoming Tests</h3>
        <div className="space-y-4">
          {upcomingTests.map(test => (
            <div key={test.id} className="border-b pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{test.name}</p>
                  <p className="text-sm text-gray-600">Date: {test.date}</p>
                </div>
                <p className="text-sm text-gray-600">
                  Enrolled: {test.enrolled}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 bg-gray-50 rounded text-left hover:bg-gray-100">
            <p className="font-medium">Grade Tests</p>
            <p className="text-sm text-gray-600">Review and grade submitted tests</p>
          </button>
          <button className="p-4 bg-gray-50 rounded text-left hover:bg-gray-100">
            <p className="font-medium">Student Reports</p>
            <p className="text-sm text-gray-600">View individual performance</p>
          </button>
          <button className="p-4 bg-gray-50 rounded text-left hover:bg-gray-100">
            <p className="font-medium">Test Templates</p>
            <p className="text-sm text-gray-600">Manage saved templates</p>
          </button>
          <button className="p-4 bg-gray-50 rounded text-left hover:bg-gray-100">
            <p className="font-medium">Question Bank</p>
            <p className="text-sm text-gray-600">Browse and manage questions</p>
          </button>
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="w-64 bg-white border-r">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Mentor Dashboard</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {[
            { icon: Home, label: 'Dashboard', id: 'dashboard' },
            { icon: FileText, label: 'Tests', id: 'tests' },
            { icon: Users, label: 'Students', id: 'students' },
            { icon: Calendar, label: 'Schedule', id: 'schedule' },
            { icon: BookOpen, label: 'Resources', id: 'resources' },
            { icon: Settings, label: 'Settings', id: 'settings' }
          ].map(item => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-2 p-2 rounded ${
                  activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 p-8">
        {activeSection === 'dashboard' ? <MainContent /> : <div>Section under development</div>}
      </div>
      <TestCreationForm 
        open={showTestCreator}
        onClose={() => setShowTestCreator(false)}
        onSubmit={handleSubmitTest}
      />
    </div>
  );
};

export default MentorDashboard;