import React from 'react'
import './Rigthpane.css'
import  Card from '../components/Card'

import IPAddress from '../components/IPAddress'
import Banner from '../components/Banner'
import Latency from '../components/Latency'


function Rigthpane() {
  return (
    <div className='main'>
        {/* <header>
              <h1 class="header-1">Network Analytics</h1>
        </header> */}
        <Banner bannerText="Sextant" />
        <div>
        <IPAddress  url={`https://api64.ipify.org?format=json`} for={`IPv6`} / >
        <IPAddress  url={`https://api.ipify.org?format=json`} for={`IPv4`} / >
        <Latency />
        </div>
        
          
        
  
      
      </div>
  )
}

export default Rigthpane