import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoriesById } from '../../store/stories/actions';
import { selectStories } from '../../store/stories/selectors';
import Story from '../../components/Story';
import {fetchHomepagesById} from '../../store/homeDetails/actions';
import { selectHomeDetails } from '../../store/homeDetails/selectors';
import Homepage from '../../components/Homepage';


export default function HomepageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);
  const homepage = useSelector(selectHomeDetails)
  
  useEffect(() => {
    dispatch(fetchHomepagesById(id));
    dispatch(fetchStoriesById(id));
  }, [dispatch, id])
  
  return (
    <div>
      {homepage.map(homepage => {
        return (
          <Homepage 
            title={homepage.title}
            description={homepage.description}
            key={homepage.id}
          />
        )
      })}
      {stories.map(story => {
        return (    
          <Story 
            name={story.name}
            content={story.content}
            imageUrl={story.imageUrl}
            key={story.id}
          />
        )
      })}
    </div>
  )
}