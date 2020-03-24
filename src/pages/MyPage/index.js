import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { selectUserHomepage, selectUserStories } from '../../store/user/selectors';
import Story from '../../components/Story';
import Button from 'react-bootstrap/Button';

export default function MyPage() {
  const homepage = useSelector(selectUserHomepage);
  const stories = useSelector(selectUserStories);
  const [display, setDisplay] = useState('none')

  if(!homepage || !stories) {
    return <h1>Loading...</h1>
  }
  
  const clickHandler = () => {
    display === 'none' ? setDisplay(true) : setDisplay('none')
  }

  const form = (
    <div style={{display: display}}>
      <h1>Hello</h1>
    </div>
  )

  return (
    <div className='myPage'>
      {form}
      <Button onClick={clickHandler}>Post a cool story bro</Button>
      <div className='myHomepage' 
        style={{
          backgroundColor: homepage.backgroundColor, 
          color: homepage.color, 
          border: '3px solid black', 
          margin: '10px',
          textAlign: 'center'
        }}
      >
        <h1>{homepage.title}</h1>
        <h3>{homepage.description}</h3>
      </div>
      <div className='myStories'
        style={{
          border: '3px solid black',
          margin: '5px',
          textAlign: 'center'
        }}
      >
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
    </div>
  )
}