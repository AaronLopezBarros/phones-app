import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./PhoneDetailComponent.css";

const PhoneDetailComponent = (props) => {
  const { phonesData } = props;
  const phoneId = useParams().id;
  const filterPhone = phonesData?.filter((phone) => phone.id === phoneId);

  return filterPhone ? (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={filterPhone[0].img} />
      <Card.Body>
        <Card.Title>{filterPhone[0].name}</Card.Title>
        <Card.Text>
          <span>Colors:</span>
          {filterPhone[0].colors}
        </Card.Text>
        <Card.Text>
          <span>CPU:</span>
          {filterPhone[0].cpu}
        </Card.Text>
        <Card.Text>
          <span>Dimensions:</span>
          {filterPhone[0].dimensions}
        </Card.Text>
        <Card.Text>
          <span>Weight:</span>
          {filterPhone[0].weight}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <h1>Loading</h1>
  );
};

export default PhoneDetailComponent;
