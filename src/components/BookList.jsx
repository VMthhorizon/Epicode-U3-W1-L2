import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";

class BookList extends Component {
  render() {
    return (
      <Container className="my-4">
        <Row className="g-4">
          {this.props.allBooks.map((libro, i) => {
            return (
              <Col xs={12} md={6} lg={3} key={libro.asin + i}>
                <SingleBook libro={libro}></SingleBook>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
