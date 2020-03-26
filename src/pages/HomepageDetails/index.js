import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchHomepagesById} from '../../store/homeDetails/actions';
import { selectHomeDetails } from '../../store/homeDetails/selectors';
import Homepage from '../../components/Homepage';
import StoryCarousel from '../../components/StoryCarousel';

export default function HomepageDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const homepage = useSelector(selectHomeDetails)
  
  useEffect(() => {
    dispatch(fetchHomepagesById(id));
  }, [dispatch, id])
  
  return (
    <div>
          <Homepage 
            title={homepage.title}
            description={homepage.description}
            stories={homepage.stories}
            backgroundColor={homepage.backgroundColor}
            color={homepage.color}
          />          
          <StoryCarousel 
            stories={homepage.stories}
          />
            
    </div>
  )
}