import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./PhoneListContainer.css"

const PhoneListContainer = (props) => {
  const { phonesData } = props;
  return (
    <ListGroup className="list">
      {phonesData &&
        phonesData.map((phone) => {
          return (
            <Link to={`/phone-details/${phone.id}`} key={phone.id}>
            <ListGroup.Item >{phone.name}</ListGroup.Item>
            </Link>
          )
        })}
    </ListGroup>
  );
};

export default PhoneListContainer;
