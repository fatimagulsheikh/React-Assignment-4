import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
import './components.css'

const ComponentOne = () => {
  let { state } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Component One</h2>

        <p className="name">👤 {state.name}</p>

        <p className="info">Welcome! This is Component One using Global Context</p>
      </div>
    </div>
  )
}

export default ComponentOne