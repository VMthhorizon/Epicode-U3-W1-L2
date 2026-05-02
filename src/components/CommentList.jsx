import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup.Item as="li" className="d-flex mt-3">
          <div>{this.props.review.comment}</div>
          <div className="ms-auto">{this.props.review.rate}/5</div>
        </ListGroup.Item>
      </>
    );
  }
}

export default CommentList;
