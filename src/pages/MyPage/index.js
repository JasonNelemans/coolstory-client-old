import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserHomepage, selectUserStories } from '../../store/user/selectors';


export default function MyPage() {
  const homepage = useSelector(selectUserHomepage);
  const stories = useSelector(selectUserStories);

  console.log('homepage in mypage: ', homepage);
  console.log('stories in mypage: ', stories)
  return (
    <div>This is my page.</div>
  )
}