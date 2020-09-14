import React from 'react'
import { Tab } from 'react-tabs';
import './banner.css'
import Tabs from './Tabs.js';
function Banner() {
  return (
    <div className="banner-grid">
      
      
      <div className="banner-img">
       <img src="/component.png" alt="" height="636px" width="795px"/> 

      </div>



      <div className="banner-disc">
        <h1>
        Fundamentals: UI/ UX Design
        </h1>
      <Tabs selectedTabClassName="selected" />
      

        <div className="last">
        <p >
        Lunch will be provided. <br/> Every participant will get a Participation Certificate
        </p>
        </div>
      
      

      </div>
    
    
    
    </div>

  )
}

export default Banner;

