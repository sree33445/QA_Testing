'use client'

import React from 'react'

const Student = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-blue-300 flex flex-col">
        <header className="bg-blue-600 text-white py-4 text-center text-xl font-bold relative">
          Student Portal
          <a href='/'>
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow-md text-sm transition-colors duration-200">
              Logout
            </button>
          </a>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Welcome, Student!</h1>
          <p className="text-lg text-gray-100">Access exams and results in one place.</p>
          <div className="space-x-4">
            <a
              href="/student/studentexam"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded shadow-md"
            >
              Take Exam
            </a>
            <a
              href="/results"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded shadow-md"
            >
              View Results
            </a>
          </div>
        </main>
        <footer className="bg-blue-600 text-white py-2 text-center text-sm">
          © 2024 Student Portal. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default Student