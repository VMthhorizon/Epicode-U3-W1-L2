import { ListGroup } from "react-bootstrap";

const CommentList = function (props) {
  return (
    <>
      <ListGroup.Item as="li" className="d-flex mt-3">
        <div>{props.review.comment}</div>
        <div className="ms-auto">{props.review.rate}/5</div>
      </ListGroup.Item>
    </>
  );
};

export default CommentList;
