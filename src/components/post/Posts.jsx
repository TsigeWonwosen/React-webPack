import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div className='admin'>
    <ul>
          <li><Link to="/posts/1"><h5>Post 1</h5></Link></li>
          <li><Link to="/posts/2"><h5>Post 2</h5></Link></li>
          <li><Link to="/posts/3"><h5>Post 3</h5></Link></li>
    </ul>
    </div >
  
    )

}


export default Posts