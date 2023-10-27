package com.library.Library.persistence.repositories;

import com.library.Library.persistence.models.Author;
import com.library.Library.persistence.models.Book;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IAuthorRepository {


    Optional<Author> findById(Long id);

    Author save(Author author);

    void add(Author author);

    List<Author> getAllAuthors();

    void deleteAuthor(Long id);

    //void addBook(Long id, Book book);

    //String getBooks(Long id);

}
