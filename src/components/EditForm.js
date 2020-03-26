import React, {useState, useEffect} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { selectUserHomepage } from '../store/user/selectors';
import {useSelector, useDispatch} from 'react-redux';
import {updateHomepage} from '../store/homeDetails/actions';

export default function EditForm(){
  const dispatch = useDispatch();
  const homepage = useSelector(selectUserHomepage);
  
  const [title, setTitle] = useState(homepage.title);
  const [description, setDescription] = useState(homepage.description);
  const [color, setColor] = useState(homepage.color);
  const [backgroundColor, setBackgroundColor] = useState(homepage.backgroundColor);
  
  useEffect(() => {
    setTitle(homepage.title);
    setDescription(homepage.description);
    setColor(homepage.color);
    setBackgroundColor(homepage.backgroundColor);
  }, [homepage.color])
 
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(updateHomepage(title, description, color, backgroundColor, homepage.id));
  }

  return (
    <div>
       <Container>
        <Form as={Col} md={{ span: 8, offset: 2 }} className="mt-5">
          <h2 className="mt-5 mb-5">Edit your page</h2>
          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder={homepage.title}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={event => setDescription(event.target.value)}
              value={description}
              type="text"
              placeholder={homepage.description}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicBackgroundColor">
            <Form.Label>Background color</Form.Label>
            <Form.Control
              value={backgroundColor}
              onChange={event => setBackgroundColor(event.target.value)}
              type="color"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicColor">
            <Form.Label>Color</Form.Label>
            <Form.Control
              value={color}
              onChange={event => setColor(event.target.value)}
              type="color"
              required
            />
          </Form.Group>

          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitHandler}>
              Update
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}