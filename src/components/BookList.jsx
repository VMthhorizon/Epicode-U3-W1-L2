import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    search: "",
  };

  render() {
    return (
      <Container className="my-4">
        <Row>
          <Col>
            <Form.Control
              className="my-4"
              type="text"
              placeholder="Cerca un libro"
              value={this.state.search}
              onChange={(e) => {
                this.setState({
                  search: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <Row className="g-4">
          {this.props.allBooks
            .filter((libro) => {
              if (
                libro.title
                  .toLowerCase()
                  .includes(this.state.search.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            })
            .map((libro, i) => {
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
