import { useState, useEffect } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.get("/posts").then((res) => setPosts(res.data));
  }, []);
  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        {posts.map((p) => (
          <div key={p.id} className="mb-4">
            <Link
              to={`/blog/${p.slug}`}
              className="text-lg font-semibold text-blue-600"
            >
              {p.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
