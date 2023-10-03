import React from 'react'
import Main from '../components/post/Main'
import { TasksContextProvider } from '../context/TasksContextProvider'

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