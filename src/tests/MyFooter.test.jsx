import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MyFooter from "../components/MyFooter";
import CommentArea from "../components/CommentArea";
import BookList from "../components/BookList";
import App from "../App";
import { waitFor } from "@testing-library/react";

import fantasy from "../../public/books/fantasy.json";
import history from "../../public/books/history.json";
import horror from "../../public/books/horror.json";
import romance from "../../public/books/romance.json";
import scifi from "../../public/books/scifi.json";
import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";

const AllBooks = fantasy.concat(history, horror, romance, scifi);

describe("Montaggio iniziale", () => {
  it("component correctly mount check", () => {
    render(<MyFooter></MyFooter>);

    const title = screen.getByText(/EPICODE - 2026/i);

    expect(title).toBeInTheDocument();
  });
});

describe("Montaggio iniziale", () => {
  it("component correctly mount check", async () => {
    render(<BookList allBooks={AllBooks}></BookList>);

    try {
      const card = await screen.findAllByTestId(/card-for-test/i);
      expect(card.length).toBeLessThanOrEqual(AllBooks.length);
    } catch (error) {
      console.log(error);
    }
  });

  it("component correctly mount check", async () => {
    render(<BookList allBooks={AllBooks}></BookList>);

    try {
      const inputSearch = await screen.findByTestId(/input-test/i);
      fireEvent.change(inputSearch, { target: { value: "witcher" } });
      const card = await screen.findAllByTestId(/card-for-test/i);

      expect(card).toHaveLength(3);
    } catch (error) {
      console.log(error);
    }
  });
});

describe("Montaggio iniziale", () => {
  it("component correctly mount check", () => {
    render(<CommentArea></CommentArea>);

    const title = screen.getByText(/Recensioni di altri Lettori/i);

    expect(title).toBeInTheDocument();
  });
});

describe("Montaggio Iniziale singlebook", () => {
  it("Controllare bordo rosso al click", async () => {
    render(<BookList allBooks={AllBooks}></BookList>);

    const cards = await screen.findAllByTestId(/card-for-test/i);
    const singleCard = cards[0];

    fireEvent.click(singleCard);

    await waitFor(() => {
      expect(singleCard.style.border).toMatch(/3px solid red/i);
    });
  });
});
