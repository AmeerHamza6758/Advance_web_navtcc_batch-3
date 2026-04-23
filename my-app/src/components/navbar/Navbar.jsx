import React from 'react'
import './Navbar.css'
import NavLogo from '../../../public/download.jpeg'
function Navbar(props) {
  const {name, phone}=props

  return (
    <div style={{ backgroundColor: "blue", height: "100px", width: "100%", color: 'white' }}>
      {/* <img src="/download.jpeg" alt="" /> */}
      <img src={NavLogo} alt="" width="100" height="50"/>
      <h1 className=''>{name}</h1>
      <strong>{phone}</strong>
    </div>
  )
}

export default Navbar