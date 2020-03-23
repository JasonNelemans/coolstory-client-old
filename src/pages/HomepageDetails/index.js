import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from '../../store/stories/actions';
import { selectStories } from '../../store/stories/selectors';
import Story from '../../components/Story';
import { selectHomepages } from '../../store/home/selector';
import {fetchHomepagesById} from '../../store/homeDetails/actions';

export default function HomepageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stories = useSelector(selectStories);
  const homepages = useSelector(selectHomepages);

  console.log('stories: ', stories)
  console.log('homepages: ', homepages)
  
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