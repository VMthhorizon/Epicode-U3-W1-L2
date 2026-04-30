import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    clicked: {
      selected: false,
    },
  };

  render() {
    return (
      <>
        <Card
          className={"h-100"}
          style={{
            cursor: "pointer",
            transition: "all 0.3s ease",
            ...(this.state.selected && {
              transform: "scale(1.05)",
              zIndex: 1,
              border: "3px solid red",
            }),
          }}
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
        >
          <Card.Img className="h-75" variant="top" src={this.props.libro.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="flex-grow-1 fs-6">
              {this.props.libro.title}
            </Card.Title>
            <Card.Text className="text-center">
              {this.props.libro.price}
            </Card.Text>
            <Button variant="primary">Comprami</Button>
            {this.state.selected && (
              <CommentArea asin={this.props.libro.asin}></CommentArea>
            )}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
