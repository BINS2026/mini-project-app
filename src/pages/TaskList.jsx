import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const fetchTodos = async () => {
  const response = await fetch('https://dummyjson.com/todos');
  if (!response.ok) throw new Error('Failed to fetch tasks from the server');
  return response.json();
};

export default function TaskList() {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });

  if (isLoading) {
    return <div className="text-center py-8 text-gray-500 font-medium">Loading tasks...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
        Error: {error.message}
      </div>
    );
  }

  // Filter tasks locally based on useState search term
  const filteredTodos = data?.todos?.filter((todo) =>
    todo.todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Task List</h2>
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-md px-3 py-1.5 text-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredTodos?.length === 0 ? (
        <div className="text-center py-8 text-gray-500 bg-white rounded-lg border p-4">
          No matching tasks found.
        </div>
      ) : (
        <ul className="space-y-3">
          {filteredTodos?.map((todo) => (
            <li
              key={todo.id}
              className="bg-white p-4 rounded-lg border shadow-sm flex items-center justify-between hover:border-blue-400 transition-colors"
            >
              <Link
                to={`/tasks/${todo.id}`}
                className="font-medium text-gray-900 hover:text-blue-600"
              >
                {todo.todo}
              </Link>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  todo.completed
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {todo.completed ? 'Completed' : 'Pending'}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}