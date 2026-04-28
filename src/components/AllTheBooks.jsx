import { Container, Row, Card, Button, Col } from "react-bootstrap";

const AllTheBooks = function (props) {
  return (
    <Container>
      <Row className="d-flex g-4">
        {props.libri.map((libro, i) => {
          return (
            <Col xs={12} md={4} key={libro.asin + i}>
              <Card className="h-100">
                <Card.Img className="h-75" variant="top" src={libro.img} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="flex-grow-1">{libro.title}</Card.Title>
                  <Card.Text className="text-center">{libro.price}</Card.Text>
                  <Button variant="primary">Comprami</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
