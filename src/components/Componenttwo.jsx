import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import './components.css'

const Componenttwo = () => {
  let { state, dispatch } = useContext(GlobalContext);

  const handleClick = () => {
    dispatch({
      type: "CHANGE_NAME",
      payload: "Fatima Sheikh"
    })
  }

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Component Two</h2>

        <p className="name">👤 {state.name}</p>

        <button className="btn" onClick={handleClick}>
          Change Name
        </button>
      </div>
    </div>
  )
}

export default Componenttwo