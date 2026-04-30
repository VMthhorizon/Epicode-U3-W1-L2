import { Component } from "react";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

class CommentArea extends Component {
  state = {
    recensioni: [],
  };

  getComments = async (id) => {
    try {
      const response = await fetch(url + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTU4ZGYwNDIwZDAwMTUxNTVhOWQiLCJpYXQiOjE3Nzc1NTQ4MjksImV4cCI6MTc3ODc2NDQyOX0.FfO2gIje8SJEwqfo3qxYjHSyivoGQ2apJqdynSk7J74",
        },
      });
      if (response.ok) {
        const data = await response.json();

        this.setState({
          recensioni: data,
        });
      } else {
        console.log("ERRORE", response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return <p className="mt-3">QUI VA L'AREA DEI COMMENTI</p>;
  }
}

export default CommentArea;
