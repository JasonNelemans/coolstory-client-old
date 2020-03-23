import React from 'react';

export default function Story(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.content}</p>
      <img src={props.imageUrl} alt=''/>
    </div>
  )
}