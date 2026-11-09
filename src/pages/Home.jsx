import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div className="bg-white rounded-lg border shadow-sm p-6 max-w-2xl mx-auto text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">Welcome to MyTrack</h2>
      <p className="text-gray-600">
        A simple React application to manage daily productivity tasks fetched from an API.
      </p>
      <div>
        <Link
          to="/tasks"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          View Task List →
        </Link>
      </div>
    </div>
  );
}