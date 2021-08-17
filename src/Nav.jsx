import { Navbar, Container } from "react-bootstrap";

const Nav = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <strong>
              <h2>HOMES</h2>
            </strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
