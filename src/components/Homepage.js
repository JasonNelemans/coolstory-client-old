import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export default function Homepage(props) {
  const background = props.backgroundColor;
  const text = props.color;

  return (
    <div style={{backgroundColor: background, color: text}}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <NavLink to={`/homepages/${props.id}`} exact={true}><button>Visit page</button></NavLink>
    </div>
  )
}