import { Component } from "react";
import { Form, Button } from "react-bootstrap";

const url = "https://striveschool-api.herokuapp.com/api/comments";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  render() {
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            const response = await fetch(url, {
              method: "POST",
              body: JSON.stringify(this.state.review),
              headers: {
                "Content-type": "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTU4ZGYwNDIwZDAwMTUxNTVhOWQiLCJpYXQiOjE3Nzc1NTQ4MjksImV4cCI6MTc3ODc2NDQyOX0.FfO2gIje8SJEwqfo3qxYjHSyivoGQ2apJqdynSk7J74",
              },
            });
            if (response.ok) {
              alert("Recensione Aggiunta con Successo");
              this.setState({
                review: {
                  comment: "",
                  rate: 1,
                  elementId: this.props.asin,
                },
              });
            } else {
              throw new Error("ERRORE NEL JSON", response.status);
            }
          } catch (err) {
            console.log("ERRORE NEL SERVER", err);
          }
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label htmlFor="review">Recensione</Form.Label>
          <Form.Control
            id="review"
            as="textarea"
            rows={4}
            placeholder="Lascia un commento"
            value={this.state.review.comment}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  comment: e.target.value,
                },
              });
            }}
          />
          <Form.Control
            type="number"
            min={1}
            max={5}
            placeholder="Lascia un voto da 1 a 5"
            value={this.state.review.rate}
            onChange={(e) => {
              this.setState({
                review: {
                  ...this.state.review,
                  rate: e.target.value,
                },
              });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia Commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
