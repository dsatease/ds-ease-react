import { Searchbar } from "./Searchbar"
import LaunchIcon from '@mui/icons-material/Launch';
import { useEffect, useState } from "react";
import versionfile from '../version.txt'
export const Navbar = () => {
  const [version,setVersion]=useState('')
  useEffect(() => {
    fetch(versionfile).then((res) => {
      return res.text()
    }).then((data) => {
      console.log(data);
      setVersion(data)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <div className="box navbar">
      <div className="leftbar"></div>
      <div className="nav mid">
        <div className="log">
          <h3 className="white bold">DS<span>@</span>Ease</h3>
        </div>
        <div className="tags display-flex mx-5">
          <a href="/docs" className="white txtdecnone mx-2 smtxt1">Docs</a>
          <a href="/blog" className="white txtdecnone mx-2 smtxt1">Blog</a>
          <a href="/community" className="white txtdecnone mx-2 smtxt1">Community</a>
        </div>
        <div className="search">
          <Searchbar />
        </div>
        <div className="connections display-flex">
          <a href="/" className="white txtdecnone mx-2 smtxt">V{version} </a>
          <a href="/" className="white txtdecnone mx-2 smtxt display-flex">GitHub <LaunchIcon style={{fontSize:'13px',marginLeft:'9px'}}/> </a>
        </div>
      </div>
      <div className="rightbar"></div>
    </div>
  )
}
