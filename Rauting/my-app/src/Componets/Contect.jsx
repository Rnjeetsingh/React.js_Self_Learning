import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Contect() {
  return (
    <div>
    <Link to={'Instagram'}><h3>Contect Via Instagram</h3></Link>
    <Link to={'Mail'}><h3>Contect Via Mail</h3></Link>
    <Outlet />
    </div>
  )
}

export default Contect
