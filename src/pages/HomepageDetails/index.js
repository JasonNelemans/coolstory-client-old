import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchStories } from '../../store/stories/actions';

export default function HomepageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log('id: ', id);
  
  useEffect(() => {
    dispatch(fetchStories(id))
  }, [dispatch])

  return (
    <div>
      <h1>TEEESSTT</h1>
    </div>
  )
}