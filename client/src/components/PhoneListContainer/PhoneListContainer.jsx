import { ListGroup } from "react-bootstrap";

const PhoneListContainer = (props) => {
  const { phonesData } = props;
  return (
    <ListGroup>
      {phonesData &&
        phonesData.map((phone) => {
          return <ListGroup.Item key={phone.id}>{phone.name}</ListGroup.Item>;
        })}
    </ListGroup>
  );
};

export default PhoneListContainer;
