import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchTodo = async (id) => {
    const response = await fetch(`https://dummyjson.com/todos/${id}`);
    if (!response.ok) throw new Error('Failed to fetch task details');
    return response.json();
  };
  
  export default function TaskDetail() {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
      queryKey: ['todo', id],
      queryFn: () => fetchTodo(id),
    });
  
    if (isLoading) {
      return <div className="text-center py-8 text-gray-500 font-medium">Loading task details...</div>;
    }
  
    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          Error: {error.message}
        </div>
      );
    }
  
    if (!data) {
      return <div className="text-center py-8 text-gray-500">No task details found.</div>;
    }
  
    return (
      <div className="max-w-2xl mx-auto space-y-4">
        <Link
          to="/tasks"
          className="text-sm font-medium text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
        >
          ← Back to Task List
        </Link>
  
        <div className="bg-white rounded-lg border shadow-sm p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-bold text-gray-900">{data.todo}</h2>
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${
                data.completed
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {data.completed ? 'Completed' : 'Pending'}
            </span>
          </div>
  
          <div className="border-t pt-4 text-sm text-gray-500 flex justify-between">
            <span>Task ID: #{data.id}</span>
            <span>User ID: #{data.userId}</span>
          </div>
        </div>
      </div>
    );
  }