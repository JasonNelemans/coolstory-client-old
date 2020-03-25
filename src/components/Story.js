import React from 'react';

export default function Story(props) {
  return (
    <div style={{
      border: '3px solid black', 
      margin: '10px',
      padding: '15px',
      textAlign: 'center'
    }}>
      <h2>{props.name}</h2>
      <p>{props.content}</p>
      <img src={props.imageUrl} alt=''/>
    </div>
  )
}