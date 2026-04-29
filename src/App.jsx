import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import fantasy from "../public/books/fantasy.json";
import history from "../public/books/history.json";
import horror from "../public/books/horror.json";
import romance from "../public/books/romance.json";
import scifi from "../public/books/scifi.json";

import NewNavbar from "./components/NewNavbar";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <NewNavbar></NewNavbar>
        <main>
          <h1 className="text-center my-3">FANTASY</h1>
          <BookList allBooks={fantasy}></BookList>
          <h1 className="text-center my-3">HISTORY</h1>
          <BookList allBooks={history}></BookList>
          <h1 className="text-center my-3">HORROR</h1>
          <BookList allBooks={horror}></BookList>
          <h1 className="text-center my-3">ROMANCE</h1>
          <BookList allBooks={romance}></BookList>
          <h1 className="text-center my-3">SCI-FI</h1>
          <BookList allBooks={scifi}></BookList>
        </main>
        <MyFooter></MyFooter>
      </div>
    </>
  );
}

export default App;
