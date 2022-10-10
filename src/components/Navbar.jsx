import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/coding.png'
export const Navbar = () => {


  return (
    <nav className="navbar" >
      <div className="nav-inner">
        <Link to="/" className="logo" style={{display:'flex',flexDirection:'row',alignItems:'center',textDecoration:'none',color:'inherit'}}>
          <img src={logo} style={{ width: '35px', marginRight: '10px',marginLeft:'10px' }} alt="" />
          <h4 style={{ margin: '0' }}>Data Structures at Ease</h4>
        </Link>
        <div className="nav-tabs" style={{width:'fit-content'}}>
          <Link to="/lists?topic=arraylist" style={{textDecoration:'none',color:'inherit',fontSize:'13px',margin:'0 15px'}}>Docs</Link>
          <Link to="/help" style={{textDecoration:'none',color:'inherit',fontSize:'13px',margin:'0 15px'}}>Help</Link>
          <a href="https://github.com/dsatease" style={{textDecoration:'none',color:'inherit',fontSize:'13px',margin:'0 15px'}}>Github</a>
        </div>
      </div>

    </nav>
  )
}
