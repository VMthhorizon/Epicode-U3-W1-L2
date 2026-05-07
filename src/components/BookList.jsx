import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = function (props) {
  const [search, setSearch] = useState("");
  const [asin, setAsin] = useState("");

  const changeAsin = (newAsin) => {
    setAsin(newAsin);
  };

  return (
    <Container
      fluid
      className="my-4 justify-content-between align-items-center"
    >
      <h1>CIAO BELLI</h1>
      <Row>
        <Col xs={8}>
          <Row>
            <Col>
              <Form.Control
                className="my-4"
                type="text"
                placeholder="Cerca un libro"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="g-4">
            {props.allBooks
              .filter((libro) => {
                if (libro.title.toLowerCase().includes(search.toLowerCase())) {
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
                      changeAsin={changeAsin}
                      selectedAsin={asin}
                    ></SingleBook>
                  </Col>
                );
              })}
          </Row>
        </Col>
        <Col xs={4} className="text-center align-items-start">
          <CommentArea asin={asin}></CommentArea>
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
