import React, {useState} from 'react'
import SearchBook from '../Components/SearchBook'
import BookListing from '../Components/BookListing';
import BookAdding from '../Components/BookAdding';


export default function BookPage() {
    const [books, setBooks] = useState([
    { id: 1, title: "Atomic Habits", author: "James Clear", status: "unread" },
    { id: 2, title: "Deep Work", author: "Cal Newport",  status: "unread" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt & Dave Thomas",  status: "unread" },
  ]);

  return (
    <>
      <SearchBook books={books} setBooks={setBooks} />
      <BookListing books={books} setBooks={setBooks} />
      <BookAdding books={books} setBooks={setBooks} />
    </>
  )
}