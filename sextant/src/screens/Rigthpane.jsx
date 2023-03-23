import React from 'react'
import './Rigthpane.css'
import  Card from '../components/Card'

function Rigthpane() {
  return (
    <div className='main'>
        <header>
              <h1 class="header-1">Network Analytics</h1>
        </header>
        <div class="container">
  
        <div class="row ">
          <Card IPaddress={"192.654.125.125"} metric1={25} metric2={26}/>
       
        
        </div>
  
      </div>
      </div>
  )
}

export default Rigthpane