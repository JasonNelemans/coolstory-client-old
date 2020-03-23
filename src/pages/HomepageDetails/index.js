import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../store/stories/actions';
import { selectStories } from '../../store/stories/selectors';
import Story from '../../components/Story';
import {fetchHomepagesById} from '../../store/homeDetails/actions';
import { selectHomeDetails } from '../../store/homeDetails/selectors';


export default function HomepageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);
  const homepage = useSelector(selectHomeDetails)
  console.log('stories: ', stories)
  console.log('homepage: ', homepage)
  
  useEffect(() => {
    dispatch(fetchHomepagesById(id))
    dispatch(fetchStories(id))
  }, [dispatch, id])

  
  return (
    <div>
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