import React from 'react'
import {memo} from 'react'

function Todos({todos,addtodos}) {
    console.log("Childe Render");

    
  return (
    <div>
    <h1>My Todos</h1>
    <button onClick={addtodos}>Add Todos</button>
      {
        todos.map((el,i) => {
            return(
                <h1 key={i}>{el}</h1>
            )
        })
      }
      
    </div>
  )
}

export default memo(Todos);
