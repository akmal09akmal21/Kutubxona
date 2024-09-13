import { Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookList from "./pages/book/BookList";
import AddBook from "./pages/book/AddBook";
import AddAuthor from "./pages/author/AddAuthor";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/addauthor" element={<AddAuthor/>}/>
      </Routes>
    </div>
  );
}
export default App;
