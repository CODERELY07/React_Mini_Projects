import React from 'react';
import { useParams } from 'react-router-dom';
import taskData from '../data/json/tasks.json';
import { details } from 'framer-motion/client';

const Task = () => {
  const { id } = useParams(); 

  const task = taskData.find((t) => t.id === Number(id)); 
  if (!task) {
    return <p className="text-red-600">Task not found.</p>;
  }
  

  return (
    <div className="max-w-[1200px] w-full bg-white p-8 rounded-2xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">🛠️ Your Task</h1>
      <p className="text-gray-800 text-lg">
        Build a small React app with the following features:
      </p>
      <h1 className="text-3xl font-bold text-blue-700">{task.title}</h1>
      <p className="text-gray-600 italic">Level: {task.level}</p>
       <ul>
          {
            task.details.map((detail, index) => (
              <li className='mt-3' key={index}>{index + 1}. {detail}</li>
            ))
          }
       </ul>
    </div>
  );
};

export default Task;
