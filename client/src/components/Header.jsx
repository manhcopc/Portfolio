import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";

function Header() {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm py-2 fixed-top">
      <Container
        fluid
        className="px-4 d-flex align-items-center justify-content-between"
      >
        {/* ✅ Nút Toggle — nằm bên trái khi mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 order-1 order-lg-2"
        />

        {/* ✅ Logo — căn giữa khi mobile, nằm trái khi desktop */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-primary mx-auto mx-lg-0 order-2 order-lg-1 text-center"
        >
          PORTFOLIO
        </Navbar.Brand>

        {/* ✅ Menu chính + Account — hiển thị bên phải khi desktop */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-3 order-lg-3 justify-content-lg-end"
        >
          <Nav className="mx-auto text-center">
            <Nav.Link as={Link} to="/blog" className="fw-semibold text-dark">
              BLOG
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              className="fw-semibold text-dark"
            >
              PROJECTS
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="fw-semibold text-dark">
              ABOUT
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto text-center">
            <NavDropdown title="Account" id="basic-nav-dropdown" align="end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="text-danger">
                Sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
