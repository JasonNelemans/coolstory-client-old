import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import { selectToken } from "../../store/user/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function StoryForm() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [displayImage, setDisplayImage] = useState('none')
  const [preview, setPreview] = useState('')

  const submitForm = (event) => {
    event.preventDefault();
    console.log('Submitted!')
    console.log('the Details: ', name, content, imageUrl);
  }
  
  const pictureHandler = () => {
    displayImage === 'none' ? setDisplayImage(true) : setDisplayImage('none')
    setPreview(imageUrl)
  }

  return (
    <div className='form'>
       <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h2 className="mt-5 mb-5"><strong>Post a <em>cool</em> story bro</strong></h2>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={event => setName(event.target.value)}
              type="input"
              placeholder="Enter a name for your story"
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicContent">
            <Form.Label>Content</Form.Label>
            <Form.Control
              value={content}
              onChange={event => setContent(event.target.value)}
              type="text"
              placeholder="Tell us what happened"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicUrl">
            <Form.Label>Image url</Form.Label>
            <Form.Control
              value={imageUrl}
              onChange={event => setImageUrl(event.target.value)}
              type="input"
              placeholder="Image url goes here"
              required
            />
            <div style={{display: displayImage}}> 
              <img src={preview} alt='' />
            </div>
            <Button variant="primary" onClick={pictureHandler}>
              Preview the picture
            </Button>
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Post it bruu!
            </Button>
          </Form.Group>
        </Form>
    </Container>
    </div>
  )
}