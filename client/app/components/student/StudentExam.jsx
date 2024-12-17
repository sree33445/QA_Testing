'use client';
import React, { useState } from 'react';

const StudentTestPage = () => {
  const [availableTests, setAvailableTests] = useState([
    { id: 1, title: 'High School math', subject: 'Math', duration: '60 minutes' },
    { id: 2, title: 'Primary Science', subject: 'Science', duration: '45 minutes' },
    { id: 3, title: 'Angular (IT)', subject: 'Angular', duration: '90 minutes' },
    { id: 4, title: 'PySpark (IT)', subject: 'PySpark', duration: '90 minutes' }
  ]);

  const handleStartTest = (testId) => {
    console.log(`Starting test with ID: ${testId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-md">
        Available Tests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {availableTests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 
                    transform transition-all duration-300 hover:-translate-y-2 
                    hover:shadow-3xl overflow-hidden"
          >
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
              <h2 className="text-2xl font-bold text-white mb-2 truncate">
                {test.title}
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="font-medium text-gray-500">Subject:</span>
                <span className="font-semibold text-gray-800 bg-blue-100 px-3 py-1 rounded-full text-sm">
                  {test.subject}
                </span>
              </div>
              <div className="flex justify-between items-center border-b pb-3 border-gray-200">
                <span className="font-medium text-gray-500">Duration:</span>
                <span className="font-semibold text-gray-800 bg-green-100 px-3 py-1 rounded-full text-sm">
                  {test.duration}
                </span>
              </div>
              <button
                onClick={() => handleStartTest(test.id)}
                className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                       text-white font-bold rounded-lg 
                       hover:from-blue-700 hover:to-purple-700 
                       transition-all duration-300 
                       transform hover:scale-105 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Start Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentTestPage;