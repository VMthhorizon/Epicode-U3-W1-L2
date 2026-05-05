import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import { ListGroup } from "react-bootstrap";

const url = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentArea = function (props) {
  const [recensioni, setRecensioni] = useState([]);

  const getComments = async (id) => {
    if (!id) return;
    try {
      const response = await fetch(url + id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzNTU4ZGYwNDIwZDAwMTUxNTVhOWQiLCJpYXQiOjE3Nzc1NTQ4MjksImV4cCI6MTc3ODc2NDQyOX0.FfO2gIje8SJEwqfo3qxYjHSyivoGQ2apJqdynSk7J74",
        },
      });
      if (response.ok) {
        const data = await response.json();

        setRecensioni(data);
      } else {
        console.log("ERRORE", response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("PROVA RIPETIZIONI");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    getComments(props.asin);
  }, [props.asin]);

  return (
    <>
      <h1 className="fs-1">Recensioni di altri Lettori</h1>
      <ListGroup as="ol" numbered>
        {recensioni.map((review, i) => {
          return (
            <CommentList
              review={review}
              key={review.elementId + i}
            ></CommentList>
          );
        })}
      </ListGroup>
    </>
  );
};

export default CommentArea;
