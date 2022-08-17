import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export const Searchbar = () => {
  return (
    <div className='searchbox display-flex'>
        <SearchIcon style={{color:'white',fontSize:'18px'}}/>
        <input type="text white" style={{backgroundColor:'transparent',outline:'none',border:'none',color:'white',marginLeft:'10px',paddingLeft:'4px'}} placeholder="Search" />
    </div>
  )
}
