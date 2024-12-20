package com.cgi.library.repository;

import com.cgi.library.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BookRepository extends JpaRepository<Book, UUID> {
    @Query("SELECT DISTINCT book.genre FROM Book book")
    List<String> findAllDistinctGenres();
    // kuidas jpa buddyga seda päringut teha
}
