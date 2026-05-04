import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    search: "",
    asin: "",
  };

  changeAsin = (newAsin) => {
    this.setState({
      asin: newAsin,
    });
  };

  render() {
    return (
      <Container
        fluid
        className="my-4 justify-content-between align-items-center"
      >
        <Row>
          <Col xs={8}>
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
                    <Col xs={12} md={6} lg={4} key={libro.asin + i}>
                      <SingleBook
                        libro={libro}
                        changeAsin={this.changeAsin}
                        selectedAsin={this.state.asin}
                      ></SingleBook>
                    </Col>
                  );
                })}
            </Row>
          </Col>
          <Col xs={4} className="text-center align-items-start">
            <CommentArea asin={this.state.asin}></CommentArea>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
