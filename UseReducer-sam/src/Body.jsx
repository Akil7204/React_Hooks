import React, {useReducer} from 'react'

function reduce(state, action){
    if(action.type == "inc"){

        return  state =state + 1

    }else if(action.type == "dec"){
        if(state == 0)return state
        return state - 1
    }else{
    return state
    }
}

function Body() {
    const [state, dispatch] = useReducer(reduce, 0)

  return (
    <div>
        <h1>Count: {state}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>+</button>
        <button onClick={()=>dispatch({type:"dec"})}>-</button>
    </div>

  )
}

export default Body