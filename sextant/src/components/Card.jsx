import React from 'react'
import './Card.css'

export default function Card({type,Name}) {
  return (
    <div className='container'>

    
        <div className='heading'>The Public {type} Adress is:</div>  
        <div className='type'>{Name} </div>
        
        {/* <div className='IPaddress'> <a>{IPaddress} </a></div> */}
        {/* <div className='metric1'> <a>Latency:  {metric1} m/s</a></div>
        <div className='metric2'> <a>jitter:  {metric2} m/s</a></div> */}

       
      
    </div>
  )
}

 