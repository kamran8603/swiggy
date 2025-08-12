import React from 'react'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div style={{width:"100%",gap:"30px", height:"15vh", border:"1px solid black", display:"flex", justifyContent:"center", alignItems:"center"}}>
     
      <li style={{listStyle:"none"}}>Home</li>
      <li style={{listStyle:"none"}}>About</li>
      <li style={{listStyle:"none"}}>Contact</li>
      <li style={{listStyle:"none"}}>Services</li>   
    </div>
  )
}

export default Header
