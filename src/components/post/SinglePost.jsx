import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'

function SinglePost() {
  let { id } = useParams()
  const navigate = useNavigate();

  const handleGoBack = () => {
    // navigate(-1); // Equivalent to clicking the browser's back button
    // navigate(1) // browser's to forward.
    navigate('/posts')
  };

  return (
    <div className='admin'>SinglePost Id : {id}
    <button onClick={handleGoBack} >Go Back</button>
    </div>
  )
}

export default SinglePost