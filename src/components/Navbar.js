import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div className="nav">
      
      <div className="logo">
        <h1>upskill</h1>
      </div>
      
      <div className="list-items-nav">
      <div>
      <ul>
          <li>HOME</li>
          <li><a>workshops</a></li>
          <li><a>consultancy</a></li>
          <li><a>video lessons</a></li>
          <li><a>blog</a></li>
          <li><a>earn with upskill</a></li>
         </ul>

      </div>
    
        
      </div>
      <div className="sign">
           <a href="">sign in</a>
         </div>
    </div>
  )
}

export default Navbar
