import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const Navigate = useNavigate()
  return (
    <div>
    <div>
      404 Error Page Not Found
    </div>
    <button onClick={() => Navigate(-1)}>Go To Back</button>
    </div>
  )
}

export default Error
