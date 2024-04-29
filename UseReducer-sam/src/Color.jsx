import React, { useReducer } from 'react'

function reduce(state, action){
    if(action.type == "red"){
        return {color: state.color = "red"}
    }else if(action.type == "blue"){
        return {color: state.color = "blue"}
    }else if(action.type == "green"){
        return {color: state.color = "green"}
    }else{
        return {color: state.color}
    }
}

function Color() {
    const [state, dispatch] = useReducer(reduce, {color:"white"})

  return (
    <div style={{backgroundColor: state.color, height: "100vh", width:"100vw"}}>
        <button onClick={() => dispatch({type:"red"})} >Red</button>
        <button onClick={() => dispatch({type:"blue"})} >Blue</button>
        <button onClick={() => dispatch({type:"green"})} >Green</button>
    </div>
  )
}

export default Color