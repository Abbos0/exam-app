import React from 'react'
import { useSelector } from 'react-redux'

//components
import Entrance from '../components/Entrance'
import Question from '../components/Question'
const Main = () => {

  const {loggedIn} = useSelector(state=>state.auth)


  return (
    <div>
      {loggedIn ? <Question /> : <Entrance />}
    </div>
  )
}

export default Main
