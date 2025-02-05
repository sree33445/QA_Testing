'use client'
import React, { useState } from 'react';

const GenerateQuestion = () => {
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('objective');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionData = {
      question,
      questionType,
      options: questionType === 'objective' ? options : [],
      answer,
    };
    console.log('Submitted Question:', questionData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a Question</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Question:</label>
          <textarea
            className="w-full p-2 border rounded mt-1"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Question Type:</label>
          <select
            className="w-full p-2 border rounded mt-1"
            value={questionType}
            onChange={(e) => setQuestionType(e.target.value)}
          >
            <option value="objective">Objective (Multiple Choice)</option>
            <option value="descriptive">Descriptive</option>
          </select>
        </div>
        {questionType === 'objective' && (
          <div className="mb-4">
            <label className="block text-gray-700">Options:</label>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                className="w-full p-2 border rounded mt-1"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
            ))}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Correct Answer:</label>
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GenerateQuestion;
