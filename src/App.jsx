import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import './App.css'
import { GlobalContext } from './context/Context' // ⚠️ capital C

import { IoMdSunny } from 'react-icons/io'
import { IoMoonSharp } from 'react-icons/io5'

const App = () => {
  const { state, dispatch } = useContext(GlobalContext);
  

  const handleClick = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    // ✅ yahan main change hai (TOP LEVEL WRAPPER)
    <div className={state?.darkTheme ? "dark" : "light"}>

      <BrowserRouter>

        {/* Header */}
        <header className="header">
          <div className="logo">MyWebsite</div>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            {state?.darkTheme ? (
              <IoMdSunny className='icon' onClick={handleClick} />
            ) : (
              <IoMoonSharp className='icon' onClick={handleClick} />
            )}
          </nav>
        </header>

        {/* Pages */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </BrowserRouter>

    </div>
  )
}

export default App






