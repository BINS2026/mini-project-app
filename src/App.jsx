import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import TaskDetail from './pages/TaskDetail';

export default function App() {
    return (
        <div>
            <nav className="flex gap-4" border-b pb-4 mb-4>
                <Link to="/">Home</Link>
                <Link to="/tasks">Tasks</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/tasks/:id" element={<TaskDetail />} />
            </Routes>
        </div>
    );
}