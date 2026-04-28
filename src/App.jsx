import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import fantasy from "../public/books/fantasy.json";
import history from "../public/books/history.json";
import horror from "../public/books/horror.json";
import romance from "../public/books/romance.json";
import scifi from "../public/books/scifi.json";

import NewNavbar from "./components/NewNavbar";
import MyFooter from "./components/MyFooter";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <div className="d-flex flex-column justify-content-between min-vh-100">
        <NewNavbar></NewNavbar>
        <main>
          <h1 className="text-center my-3">FANTASY</h1>
          <AllTheBooks libri={fantasy}></AllTheBooks>
          <h1 className="text-center my-3">HISTORY</h1>
          <AllTheBooks libri={history}></AllTheBooks>
          <h1 className="text-center my-3">HORROR</h1>
          <AllTheBooks libri={horror}></AllTheBooks>
          <h1 className="text-center my-3">ROMANCE</h1>
          <AllTheBooks libri={romance}></AllTheBooks>
          <h1 className="text-center my-3">SCIFI</h1>
          <AllTheBooks libri={scifi}></AllTheBooks>
        </main>
        <MyFooter></MyFooter>
      </div>
    </>
  );
}

export default App;
