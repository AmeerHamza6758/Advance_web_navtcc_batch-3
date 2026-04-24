import React from 'react'
import './Navbar.css'
import NavLogo from '../../../public/download.jpeg'
function Navbar(props) {
  const { name, phone } = props

  const navItems = [{
    label: "Home",
    path: "#"
  },
  {
    label: "Sales",
    path: "#"
  },
  {
    label: "Contact",
    path: "#"
  },
  {
    label: "About",
    path: "#"
  },
  {
    label: "Collection",
    path: "#"
  }
  ]

  return (
    // <div style={{ backgroundColor: "blue", height: "100px", width: "100%", color: 'white' }}>
    //   {/* <img src="/download.jpeg" alt="" /> */}
    //   <img src={NavLogo} alt="" width="100" height="50" />
    //   <h1 className=''>{name}</h1>
    //   <strong>{phone}</strong>
    // </div>

    <div className='nav-container'>
      <div className='nav-logo'>
        <img src="/download.jpeg" alt="Logo" width="100%" height="100%" />
      </div>

      <div className='nav-items'>
        {navItems.map((item, index) => (
          <>
            <a href={item.path}>{item.label}</a>
          </>
        ))}
      </div>

      <div className='btn-container'>
        <button className='regi-btn'>Register</button>
        <button className='log-btn'>Login</button>
      </div>
    </div>
  )
}

export default Navbar