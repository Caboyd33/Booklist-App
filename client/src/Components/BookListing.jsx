import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';     

export default function BookListing({ books, setBooks }) {

  function handleDelete(event, bookID) {
    const result = books.filter(book => book.id !== bookID);
    setBooks(result);
  }

  function handleUpdate(event, BookID) {
    const updatedBooks = books.map(book => {
      if (book.id === BookID) {
        return { ...book, status: 'read' };
      }
      return book;
    });

    setBooks(updatedBooks);
  }

  return (
    <Container className="mt-4 p-4 bg-light rounded shadow">   
      <h2 className="text-center mb-4 text-primary">Book List</h2>

      <Table striped bordered hover responsive variant="light"> 
        <thead className="table-dark">                           
          <tr>
            <th>No.</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr 
              key={index}
              className={book.status === 'read' ? "table-success" : ""}
            >
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.status}</td>

              <td>
                <Button 
                  variant="danger" 
                  onClick={(e) => handleDelete(e, book.id)}
                >
                  Delete
                </Button>
              </td>

              <td>
                <Button 
                  variant="success" 
                  onClick={(e) => handleUpdate(e, book.id)}
                >
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
