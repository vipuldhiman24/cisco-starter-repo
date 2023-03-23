import React from 'react'
import './Card.css'

export default function Card({metric1,metric2,IPaddress}) {
  return (
    <div className=' conatiner  '>
        <div className='IPaddress'> <a>IPaddress:{IPaddress} </a></div>
        <div className='metric1'> <a>Latency:  {metric1} m/s</a></div>
        <div className='metric2'> <a>jitter:  {metric2} m/s</a></div>

       

    </div>
  )
}

 