import "./App.css";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Projects from "./pages/Projects";
import {
  BrowserRouter,
  NavLink,
  NavBar,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar className="flex gap-4 p-4 bg-gray-100">
          <NavLink to="/">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </NavBar>

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
