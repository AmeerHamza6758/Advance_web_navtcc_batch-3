import React from 'react'
import './Navbar.css'
import NavLogo from '../../../public/download.jpeg'
import { Link, useNavigate } from 'react-router-dom'
function Navbar(props) {
  const { name, phone } = props

  const navigate = useNavigate()

  const navItems = [{
    label: "Home",
    path: "/"
  },
  {
    label: "Sales",
    path: "/sales"
  },
  {
    label: "Contact",
    path: "contact-us"
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
            <Link to={item.path}>{item.label}</Link>
          </>
        ))}
      </div>

      <div className='btn-container'>
        <button className='regi-btn' onClick={()=> navigate('/sales')}>Register</button>
        <button className='log-btn'>Login</button>
      </div>
    </div>
  )
}

export default Navbar