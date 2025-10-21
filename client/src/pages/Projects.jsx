import { useEffect, useState } from "react";
import api from "../api/api";

export default function Projects() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    async function fetchProject() {
      try {
        const res = await api.get("/projects");
        setProject(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProject();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-600">{p.description}</p>
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                className="text-blue-600 text-sm"
                target="_blank"
              >
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
