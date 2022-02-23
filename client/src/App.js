import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import getAllPhones from "./services/phones.service";
import PhoneListContainer from "./components/PhoneListContainer/PhoneListContainer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [phonesData, setPhonesData] = useState();

  useEffect(() => {
    getAllPhones()
      .then((response) => {
        setPhonesData(response.data.phones);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row className="center">
          <Col className="m-3">
            <PhoneListContainer phonesData={phonesData} />
          </Col>
          <Col className="m-3 card-container">
            <AppRoutes phonesData={phonesData} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
