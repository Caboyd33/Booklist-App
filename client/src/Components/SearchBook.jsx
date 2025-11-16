import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchBook({books, setBooks}) {
  const [searchState, setSearchState] = useState("")

  function handleSearch () {
    console.log (searchState)
    const result = books.filter (book=>book.title.includes(searchState))
    setBooks(result)
  }

  return (
    <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" onClick={handleSearch}>
          Search Books
        </Button>
        <Form.Control
          name="search"
          onChange={(event)=>(setSearchState(event.target.value))}
        />
      </InputGroup>
  )
}