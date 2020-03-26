import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from '../../components/Form';
import EditForm from '../../components/EditForm';
import { selectUser } from '../../store/user/selectors';
import StoryCarousel from '../../components/StoryCarousel';
import Homepage from '../../components/Homepage';

export default function MyPage() {
  const history = useHistory();
  const {homepage, stories, token} = useSelector(selectUser);
  const [display, setDisplay] = useState('none');
  const [editDisplay, setEditDisplay] = useState('none');

  useEffect(() => {
    if(token === null) {
      history.push('/');
    }
  }, [token, history])


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
      {form} {editForm}
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
