// components/MainContent.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainContent() {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{ backgroundColor: "#fff" }}
    >
      <Header />

      {/* Phần này sẽ tự động render các trang con */}
      <main className="flex-grow-1 p-4" style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainContent;
