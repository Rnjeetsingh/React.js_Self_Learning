import React, { useContext } from 'react'
import { AppState,numData } from '../App'



function CompC() {
    const appData = useContext(AppState)
    const number = useContext(numData)

  return (
    <div>
    <h1>{appData.data}</h1>
    <h1>{appData.name.name}</h1>
    <h1>{appData.name.age}</h1>
    <h1>{number}</h1>
    </div>
  )
}

export default CompC
