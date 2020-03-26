import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from '../../components/Form';
import EditForm from '../../components/EditForm';
import { selectUserHomepage, selectUserStories } from '../../store/user/selectors';
import StoryCarousel from '../../components/StoryCarousel';
import Homepage from '../../components/Homepage';

export default function MyPage() {
  const homepage = useSelector(selectUserHomepage);
  const stories = useSelector(selectUserStories);
  const [display, setDisplay] = useState('none');
  const [editDisplay, setEditDisplay] = useState('none');

  if(!homepage || !stories) {
    return <h1>Loading...</h1>
  }
  
  const clickHandler = () => {
    display === 'none' ? setDisplay(true) : setDisplay('none');
  }

  const editClickHandler = () => {
    editDisplay === 'none' ? setEditDisplay(true) : setEditDisplay('none');
  }

  const form = (
    <div style={{display: display}}>
      <Form />
    </div>
  )

  const editForm = (
    <div style={{display: editDisplay}}>
      <EditForm />
    </div>
  )

  return (
    <div className='myPage'>
      {form}
      {editForm}
      <Button onClick={clickHandler}>Post a cool story bro</Button>
      <Button onClick={editClickHandler}>Edit my page</Button>
      <Homepage 
        title={homepage.title}
        description={homepage.description}
        backgroundColor={homepage.backgroundColor}
        color={homepage.color}
      />    
      <StoryCarousel
        stories={stories}
      />
    </div>
  )
}
