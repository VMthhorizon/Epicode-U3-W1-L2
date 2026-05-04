import { Component } from "react";
import { Card, Button } from "react-bootstrap";
// import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

class SingleBook extends Component {
  render() {
    const isSelected = this.props.selectedAsin === this.props.libro.asin;
    return (
      <>
        <Card
          className={"h-100"}
          style={{
            cursor: "pointer",
            transition: "all 0.3s ease",
            transform: this.isSelected ? "scale(1.20)" : "scale(1.00)",
            zIndex: isSelected ? 1 : 0,
            border: isSelected ? "3px solid red" : "none",
          }}
          onClick={() => {
            this.props.changeAsin(this.props.libro.asin);
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
            <AddComment asin={this.props.libro.asin}></AddComment>
            {/* {this.state.selected && (
              <CommentArea asin={this.props.libro.asin}></CommentArea>
            )} */}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
