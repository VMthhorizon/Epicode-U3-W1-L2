import { Card, Button } from "react-bootstrap";
import AddComment from "./AddComment";

const SingleBook = function (props) {
  const isSelected = props.selectedAsin === props.libro.asin;
  return (
    <>
      <Card
        className={"h-100"}
        style={{
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: isSelected ? "scale(1.05)" : "scale(1.00)",
          zIndex: isSelected ? 1 : 0,
          border: isSelected ? "3px solid red" : "none",
        }}
        onClick={() => {
          props.changeAsin(props.libro.asin);
        }}
      >
        <Card.Img className="h-75" variant="top" src={props.libro.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1 fs-6">
            {props.libro.title}
          </Card.Title>
          <Card.Text className="text-center">{props.libro.price}</Card.Text>
          <Button variant="primary">Comprami</Button>
          <AddComment asin={props.libro.asin}></AddComment>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
