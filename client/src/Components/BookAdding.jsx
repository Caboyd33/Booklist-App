import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

export default function BookAdding({books,setBooks}) {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    status:""
  })

  function handleChange (event) {
    const {name, value} = event.target
    console.log (name,value)
    setFormData ({...formData, [name]:value})
  }

  function handleADDBook () {
    console.log (formData)
    setFormData ({...formData, id:10})
    const newBook = {...formData, id:uuidv4()}
    console.log (newBook)
    setBooks ([...books, newBook])
  }


  return (
    <>
       <InputGroup className="mb-3">
        <Form.Control
          placeholder="Book Title"
          aria-label="Book Title"
          name="title"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Book Author"
          aria-label="Book Author"
          name="author"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Book Status"
          aria-label="Book Status"
          name="status"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <Button variant="secondary" onClick={handleADDBook}>ADD BOOK</Button>
    
    </>
  )
}