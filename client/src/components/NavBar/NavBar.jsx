import { Navbar, Container } from "react-bootstrap";
import phoneLogo from "../../assets/images/Mobile-Smartphone-icon.png";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={phoneLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Phones App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
