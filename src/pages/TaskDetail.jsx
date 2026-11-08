import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const fetchTodo = async (id) => {
    const response = await fetch(`https://dummyjson.com/todos/${id}`);
    return response.json();
}
    
export default function TaskDetail() {
    const { id } = useParams();
    const { data, isLoading, error } = useQuery({
        queryKey: ['todo', id],
        queryFn: () => fetchTodo(id),
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>No task found</div>;

    return (
        <div>
            <Link to="/tasks">Back to Task List</Link>
            <h1 className="text-2xl font-bold">Task Details</h1>
            <p>{data.todo}</p>
        </div>
    );
}