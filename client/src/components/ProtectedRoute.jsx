import { navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }
  return children;
}
