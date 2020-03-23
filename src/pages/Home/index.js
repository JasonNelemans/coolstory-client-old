import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { fetchHomepages } from '../../store/home/actions';

export default function Home() {

  fetchHomepages();
  
  return (
    <Jumbotron >
      <h1>THIS IS THE HOMEPAGE!</h1>
    </Jumbotron>
  )
}