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
  }, []);

  console.log('homepages: ', homepages)
  return (
    <div>
      <Jumbotron >
        <h1>THIS IS THE HOMEPAGE!</h1>
      </Jumbotron>
      {homepages.map((homepage) => {
        return (
          <Homepage 
            title={homepage.title}
            description={homepage.description}
            id={homepage.userId}
            key={homepage.id}
          />
        )
      })}
    </div>
  )
}