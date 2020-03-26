import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function StoryCarousel(props) {
  return (
    <Carousel>
      {props.stories.map(story => {
        return (
          <Carousel.Item key={story.id}>
            <img
              className="d-block w-100"
              src={story.imageUrl}
              alt=''
            />
            <Carousel.Caption>
              <h3>{story.name}</h3>
              <p>{story.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
      
      
      
      
      