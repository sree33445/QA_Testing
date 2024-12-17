'use client'
import React, { useState } from 'react';

const Teacher = () => {
  const [section, setSection] = useState(''); // To track the selected section

  const renderSection = () => {
    switch (section) {
      case 'createQuestions':
        return <div>Create Questions Section</div>;
      case 'generateQuestions':
        return <div>Generate Questions Section</div>;
      case 'questionBank':
        return <div>Question Bank Section</div>;
      case 'studentsAnswers':
        return <div>Students' Answers Section</div>;
      default:
        return <div>Select a section to view its contents</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">Teacher Dashboard</h1>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => setSection('createQuestions')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Questions
        </button>
        <button
          onClick={() => setSection('generateQuestions')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Generate Questions
        </button>
        <button
          onClick={() => setSection('questionBank')}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Show Question Bank
        </button>
        <button
          onClick={() => setSection('studentsAnswers')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Show Students' Answers
        </button>
      </div>
      <div className="w-full max-w-2xl bg-white p-6 rounded shadow">{renderSection()}</div>
    </div>
  );
};

export default Teacher;
