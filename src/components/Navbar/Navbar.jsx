import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const [expand, setExpand] = useState(false);

  const [isFixed, setIsFixed] = useState(false);
  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      expanded={expand}
      className={`navbar ${isFixed ? "fixed" : ""}`}
    >
      <Container className="navbar-container">
        {/* ✅ Brand */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <h1 className="logo" style={{ margin: 0 }}>
            𝘽𝙪𝙮𝙃𝙞𝙫𝙚
          </h1>
        </Navbar.Brand>

        {/* ✅ Toggle for mobile */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        {/* ✅ Collapsible menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link
                className="navbar-link"
                to="/"
                onClick={() => setExpand(false)}
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-link"
                to="/shop"
                onClick={() => setExpand(false)}
              >
                Shop
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="navbar-link"
                to="/cart"
                onClick={() => setExpand(false)}
              >
                Cart
              </Link>
            </Nav.Item>

            {/* ✅ Profile in menu */}
            <Nav.Item>
              <div
                className="navbar-link"
                onClick={() => {
                  setExpand(false);
                  navigate("/login");
                }}
                style={{ cursor: "pointer" }}
              >
                Profile
              </div>
            </Nav.Item>

            {/* ✅ Cart with icon and count */}
            <Nav.Item>
              <Link
                to="/cart"
                className="navbar-link position-relative"
                onClick={() => setExpand(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="nav-icon"
                  style={{ width: "20px", height: "20px", marginRight: "4px" }}
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                {cartList.length > 0 && (
                  <span
                    className="cart-badge"
                    style={{
                      position: "absolute",
                      top: "-4px",
                      right: "-10px",
                      background: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "2px 6px",
                      fontSize: "12px",
                    }}
                  >
                    {cartList.length}
                  </span>
                )}
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
