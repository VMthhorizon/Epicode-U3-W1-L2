import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFooter from "../components/MyFooter";
// import SingleBook from "../components/SingleBook";
import CommentArea from "../components/CommentArea";
// import BookList from "../components/BookList";

describe("Montaggio iniziale", () => {
  it("component correctly mount check", () => {
    render(<MyFooter></MyFooter>);

    const title = screen.getByText(/EPICODE - 2026/i);

    expect(title).toBeInTheDocument();
  });
});

// describe("Montaggio iniziale", () => {
//   it("component correctly mount check", async () => {
//     render(<SingleBook></SingleBook>);

//     try {
//       const card = await screen.findAllByText("card-for-test");
//       expect(card).toHaveLength(750);
//     } catch (error) {
//       console.log(error);
//     }
//   });
// });

describe("Montaggio iniziale", () => {
  it("component correctly mount check", () => {
    render(<CommentArea></CommentArea>);

    const title = screen.getByText(/Recensioni di altri Lettori/i);

    expect(title).toBeInTheDocument();
  });
});

// describe("Montaggio iniziale", () => {
//   it("component correctly mount check", () => {
//     render(<BookList></BookList>);

//     const title = screen.getByText(/Ciao belli/i);

//     expect(title).toBeInTheDocument();
//   });
// });
