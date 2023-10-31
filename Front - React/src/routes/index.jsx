import {Route, Routes, BrowserRouter  } from  'react-router-dom'
import  Home from  "../pages/Home"
import  Login from  "../pages/Login"
import BooksList from '../pages/BooksList'
import AuthorsList from '../pages/AuthorsList'
import AuthorBooksList from '../pages/AuthorBooksList'
const  Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/books" element={<BooksList />}/>
            <Route path="/authors" element={<AuthorsList />}/>
            <Route path="/authors/:authorId/books" element={<AuthorBooksList />}/>
        </Routes>
    </BrowserRouter>
)

export default Router