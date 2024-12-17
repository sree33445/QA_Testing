import React from 'react';
import Hello from './hello'; // Assuming 'hello' is a component, it should be capitalized

const Dashboard = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello</h1>
            <Hello />
        </div>
    );
};

export default Dashboard;