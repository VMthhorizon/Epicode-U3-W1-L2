import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    clicked: {
      selected: false,
    },
  };

  render() {
    return (
      <Card className="h-100">
        <Card.Img className="h-75" variant="top" src={this.props.libro.img} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="flex-grow-1 fs-6">
            {this.props.libro.title}
          </Card.Title>
          <Card.Text className="text-center">
            {this.props.libro.price}
          </Card.Text>
          <Button variant="primary">Comprami</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
