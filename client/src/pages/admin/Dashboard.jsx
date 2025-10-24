import { Link } from "react-router-dom";


export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="space-x-4">
        <Link to="/admin/posts" className="text-blue-600 underline">
          Quản lý bài viết
        </Link>
        <Link to="/admin/projects" className="text-blue-600 underline">
          Quản lý dự án
        </Link>
      </div>
    </div>
  );
}
