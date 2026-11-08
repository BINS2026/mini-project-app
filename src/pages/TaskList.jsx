import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const fetchTodos = async () => {
    const response = await fetch('https://dummyjson.com/todos');
    return response.json();
}

export default function TaskList() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data?.todos?.length) return <div>No tasks found</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold">Task List</h1>
            <ul>
                {data.todos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/tasks/${todo.id}`}>{todo.todo}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}