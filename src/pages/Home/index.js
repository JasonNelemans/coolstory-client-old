import React, {useEffect} from 'react';
import { Jumbotron } from 'react-bootstrap';
import { fetchHomepages } from '../../store/home/actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectHomepages } from '../../store/home/selector';
import Homepage from '../../components/Homepage';

export default function Home() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomepages);

  useEffect(() => {
    dispatch(fetchHomepages());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron >
        <h1>THIS IS THE HOMEPAGE!</h1>
      </Jumbotron>
      <div style={{
        border: '3px solid black', 
        margin: '10px',
        textAlign: 'center'
      }}>
        {homepages.map((homepage) => {
          return (
            <Homepage 
              title={homepage.title}
              description={homepage.description}
              id={homepage.userId}
              key={homepage.id}
              backgroundColor={homepage.backgroundColor}
              color={homepage.color}
            />
          )
        })}
      </div>
    </div>
  )
}