"use client"
import React, { useState } from 'react';
import axios from 'axios';

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

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const questionData = {
      subject: "General Knowledge", // Example subject
      question_type: questionType,
      question_text: question,
      options: questionType === 'objective' ? options : [],
      correct_option: questionType === 'objective' ? answer : null,
      ideal_keywords: questionType === 'descriptive' ? answer.split(',') : [],
      weightage: 1, // Default weightage
    };

    try {
      const response = await axios.post(
        questionType === 'objective'
          ? 'http://localhost:8000/add-question-mcq/'
          : 'http://localhost:8000/add-question-descriptive/',
        questionData
      );
      console.log('Question added successfully:', response.data);
      alert('Question added successfully!');
    } catch (error) {
      console.error('Error adding question:', error);
      alert('Failed to add question. Check the console for details.');
    }
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
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-1"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  onClick={() => removeOption(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
              onClick={addOption}
            >
              Add Option
            </button>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">
            {questionType === 'objective' ? 'Correct Answer:' : 'Ideal Keywords (comma-separated):'}
          </label>
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