import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

export default function BookRegistration({books,setBooks}) {
  const [formData, setFormData] = useState ({
    id: "",
    title: "",
    author: "",
    status: ""
  })

  function handleChange (event) {
    const {name, value} = event.target
    setFormData ({...formData, [name]:value})
  }

  function handleSubmit () {
    const newBook = {
      ...formData,
      id: uuidv4()
    }
    setBooks ([...books, formData])
  }

  return (
    <>
      <h2>Adding a Book</h2>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Book Title</InputGroup.Text>
        <Form.Control
          name="title"
          onChange= {(event)=>handleChange(event)}
        /><br />
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Book Author</InputGroup.Text>
          <Form.Control
          name="author"
          onChange= {(event)=>handleChange(event)}
          />
        </InputGroup>

        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Status</InputGroup.Text>
          <Form.Control
          name="status"
          onChange= {(event)=>handleChange(event)}
          />
        </InputGroup>

      </InputGroup>
      <Button variant="secondary" onClick={handleSubmit}>ADD BOOK</Button>
    </>
  )
}