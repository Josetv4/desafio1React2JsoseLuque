import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="danger" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Link to="/" className="text-white text-decoration-none me-3">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-white text-decoration-none">
            📙 Contacto
          </Link>
        </div>
        <div>
          <Navbar.Brand className="me-0">🍰 Happy Cake</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigation;


