import React from 'react'
import Main from '../Main'
import { TasksContextProvider } from '../../context/TasksContextProvider'

function Home(props) {
  return (
    <>
      <TasksContextProvider>
        <Main />
      </TasksContextProvider>
    </>
  )
}

export default Home