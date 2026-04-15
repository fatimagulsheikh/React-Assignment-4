import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import './components.css'

const ComponentThree = () => {
  let { state } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Component Three</h2>

        <p className="name">👤 {state.name}</p>

        <p className="info">This is data coming from Global Context</p>
      </div>
    </div>
  )
}

export default ComponentThree