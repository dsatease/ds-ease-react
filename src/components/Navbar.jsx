import React from 'react'
import logo from '../assets/coding.png'
export const Navbar = () => {


  return (
    <nav className="navbar" >
      <div className="nav-inner">
        <div className="logo" style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <img src={logo} style={{ width: '35px', marginRight: '10px',marginLeft:'10px' }} alt="" />
          <h4 style={{ margin: '0' }}>Data Structures at Ease</h4>
        </div>
        <div className="nav-tabs" style={{width:'fit-content'}}>
          <a href="/" style={{textDecoration:'none',color:'inherit',fontSize:'13px',margin:'0 15px'}}>Docs</a>
          <a href="/" style={{textDecoration:'none',color:'inherit',fontSize:'13px',margin:'0 15px'}}>Help</a>
          <a href="/" style={{textDecoration:'none',color:'inherit',fontSize:'13px',margin:'0 15px'}}>Github</a>
        </div>
      </div>

    </nav>
  )
}
