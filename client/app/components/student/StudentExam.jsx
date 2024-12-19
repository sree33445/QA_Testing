'use client';
import React, { useState } from 'react';
import { Search, Clock, BookOpen, AlertCircle } from 'lucide-react';

const StudentTestPage = () => {
  const [availableTests, setAvailableTests] = useState([
    { id: 1, title: 'High School Math', subject: 'Math', duration: '60 minutes', difficulty: 'Intermediate', questions: 30 },
    { id: 2, title: 'Primary Science', subject: 'Science', duration: '45 minutes', difficulty: 'Beginner', questions: 25 },
    { id: 3, title: 'Angular (IT)', subject: 'Angular', duration: '90 minutes', difficulty: 'Advanced', questions: 40 },
    { id: 4, title: 'PySpark (IT)', subject: 'PySpark', duration: '90 minutes', difficulty: 'Advanced', questions: 35 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const handleStartTest = (testId) => {
    console.log(`Starting test with ID: ${testId}`);
  };

  const filteredTests = availableTests.filter(test => {
    const matchesSearch = test.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = selectedDifficulty === 'All' || test.difficulty === selectedDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const getDifficultyStyles = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return {
          badge: 'bg-emerald-100 text-emerald-800',
          header: 'bg-gradient-to-r from-emerald-500 to-green-600',
          button: 'bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
        };
      case 'intermediate':
        return {
          badge: 'bg-amber-100 text-amber-800',
          header: 'bg-gradient-to-r from-amber-500 to-orange-600',
          button: 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700'
        };
      case 'advanced':
        return {
          badge: 'bg-rose-100 text-rose-800',
          header: 'bg-gradient-to-r from-rose-500 to-red-600',
          button: 'bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700'
        };
      default:
        return {
          badge: 'bg-gray-100 text-gray-800',
          header: 'bg-gradient-to-r from-gray-500 to-slate-600',
          button: 'bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700'
        };
    }
  };

  const getDifficultyButtonColor = (difficulty) => {
    if (selectedDifficulty === difficulty) {
      switch (difficulty.toLowerCase()) {
        case 'beginner': return 'bg-emerald-600 text-white';
        case 'intermediate': return 'bg-amber-600 text-white';
        case 'advanced': return 'bg-rose-600 text-white';
        case 'all': return 'bg-blue-600 text-white';
        default: return 'bg-blue-600 text-white';
      }
    }
    return 'bg-white text-gray-600 hover:bg-gray-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-800">
            Available Tests
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select from our comprehensive range of assessment materials designed to evaluate and enhance your knowledge.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tests..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  onClick={() => setSelectedDifficulty(difficulty)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${getDifficultyButtonColor(difficulty)}`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>

          {filteredTests.length === 0 && (
            <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-rose-400" />
              <p className="text-rose-700">
                No tests found matching your search criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTests.map((test) => {
            const styles = getDifficultyStyles(test.difficulty);
            return (
              <div
                key={test.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`${styles.header} p-6`}>
                  <h2 className="text-2xl font-bold text-white mb-2 truncate">
                    {test.title}
                  </h2>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${styles.badge}`}>
                    {test.difficulty}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen className="h-4 w-4" />
                        <span>Subject:</span>
                      </div>
                      <span className="font-semibold text-gray-800 bg-slate-100 px-3 py-1 rounded-full">
                        {test.subject}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>Duration:</span>
                      </div>
                      <span className="font-semibold text-gray-800 bg-slate-100 px-3 py-1 rounded-full">
                        {test.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm border-t pt-3">
                      <span className="text-gray-600">Questions:</span>
                      <span className="font-semibold text-gray-800">
                        {test.questions} questions
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleStartTest(test.id)}
                    className={`w-full py-3 text-white font-bold rounded-lg 
                             transition-all duration-300 
                             transform hover:scale-105 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.button}`}
                  >
                    Start Test
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentTestPage;