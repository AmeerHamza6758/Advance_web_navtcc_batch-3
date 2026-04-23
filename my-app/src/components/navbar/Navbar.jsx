import React from 'react'
import './Navbar.css'
function Navbar(props) {
  const {name, phone}=props
  return (
    <div style={{ backgroundColor: "blue", height: "100px", width: "100%", color: 'white' }}>
      <h1 className=''>{name}</h1>
      <strong>{phone}</strong>
    </div>
  )
}

export default Navbar