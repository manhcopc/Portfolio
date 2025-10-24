import { useEffect, useState } from "react";
import authApi from "../../api/authAxios";

export default function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "" });

  async function loadProjects() {
    const res = await authApi.get("/projects");
    setProjects(res.data);
  }

  async function addProject(e) {
    e.preventDefault();
    await authApi.post("/projects", newProject);
    setNewProject({ name: "", description: "" });
    loadProjects();
  }

  async function deleteProject(id) {
    await authApi.delete(`/projects/${id}`);
    loadProjects();
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Quản lý Dự án</h2>

      <form onSubmit={addProject} className="mb-6">
        <input
          type="text"
          placeholder="Tên dự án"
          value={newProject.name}
          onChange={(e) =>
            setNewProject({ ...newProject, name: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Mô tả"
          value={newProject.description}
          onChange={(e) =>
            setNewProject({ ...newProject, description: e.target.value })
          }
          className="border p-2 mr-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Thêm
        </button>
      </form>

      <ul>
        {projects.map((p) => (
          <li key={p.id} className="flex justify-between border-b py-2">
            <span>{p.name}</span>
            <button
              onClick={() => deleteProject(p.id)}
              className="text-red-600 text-sm"
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
