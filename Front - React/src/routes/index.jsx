import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import BooksList from '../pages/BooksList';
import AuthorsList from '../pages/AuthorsList';
import AuthorBooksList from '../pages/AuthorBooksList';
import '../styles/styles.css';

const Router = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/authors" element={<AuthorsList />} />
      <Route path="/authors/:authorId/books" element={<AuthorBooksList />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
