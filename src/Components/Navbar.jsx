import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="App-header">
    <h2 style={{marginLeft : '20px'}}>Dictionary App</h2>
    <div>
     <NavLink to='/'>Home</NavLink>
     <NavLink to='/history'>History</NavLink>
    </div>
  </header>
  )
}

export default Navbar
