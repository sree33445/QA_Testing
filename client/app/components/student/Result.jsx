'use client'
import React, { useState } from 'react'
import { 
  BarChart2, 
  Award, 
  FileText, 
  TrendingUp 
} from 'lucide-react'

// Mock data - in a real application, this would come from an API or backend
const mockExamResults = [
  {
    id: 1,
    subject: 'Mathematics',
    date: '2024-01-15',
    score: 85,
    maxScore: 100,
    grade: 'B+',
    status: 'Passed'
  },
  {
    id: 2,
    subject: 'Science',
    date: '2024-01-22',
    score: 92,
    maxScore: 100,
    grade: 'A',
    status: 'Passed'
  },
  {
    id: 3,
    subject: 'Angular',
    date: '2024-02-05',
    score: 78,
    maxScore: 100,
    grade: 'C+',
    status: 'Passed'
  }
]

const ResultCard = ({ result }) => {
  const performanceColor = 
    result.score >= 90 ? 'bg-green-100 border-green-300' :
    result.score >= 80 ? 'bg-blue-100 border-blue-300' :
    result.score >= 70 ? 'bg-yellow-100 border-yellow-300' :
    'bg-red-100 border-red-300'

  return (
    <div className={`p-6 rounded-lg shadow-md border ${performanceColor} transition-all duration-300 hover:shadow-lg`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{result.subject}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium 
          ${result.status === 'Passed' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
          {result.status}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Exam Date: {result.date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Grade: {result.grade}</span>
        </div>
        <div className="flex items-center space-x-2">
          <BarChart2 className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Score: {result.score}/{result.maxScore}</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Percentage: {((result.score / result.maxScore) * 100).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  )
}

const Results = () => {
  const [results] = useState(mockExamResults)

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-sky-200 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
          <header className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Exam Results</h1>
            <a href="/student" className="text-white hover:underline">Back to Dashboard</a>
          </header>
          
          <div className="p-6 space-y-6">
            {results.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No exam results available.
              </div>
            ) : (
              results.map(result => (
                <ResultCard key={result.id} result={result} />
              ))
            )}
          </div>

          <div className="bg-gray-50 p-4 text-center text-sm text-gray-600">
            Total Exams: {results.length} | Average Score: {
              (results.reduce((sum, r) => sum + r.score, 0) / results.length).toFixed(1)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results