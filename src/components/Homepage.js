import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Homepage(props) {
  const {backgroundColor, color} = props;
  const link = props.id 
  ? <NavLink to={`/homepages/${props.id}`} exact={true}><button>Visit page</button></NavLink>
  : ''

  return (
    <div>
      <div style={{
          backgroundColor: backgroundColor, 
          color: color,
          border: '3px solid black', 
          margin: '10px',
          padding: '15px',
          textAlign: 'center'
        }}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          {link}
      </div>
    </div>
  )
}