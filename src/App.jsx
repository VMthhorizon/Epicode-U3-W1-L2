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

const AllBooks = fantasy.concat(history, horror, romance, scifi);

function App() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <NewNavbar></NewNavbar>
        <main>
          <h1 className="text-start ms-3 mt-3">Scegli un Libro</h1>
          <BookList allBooks={AllBooks}></BookList>
        </main>
        <MyFooter></MyFooter>
      </div>
    </>
  );
}

export default App;
