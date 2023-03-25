import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';


export default function IPAdress(props) {
 const [ip, setIP] = useState("")

 useEffect( ()=>{
       axios.get(`${props.url}`,  ).then((res)=>{
        console.log(res.data.ip)
        setIP(res.data.ip)
       })
         }
          ,)
  return (
     <>
     <div className='conatiner' >
      
     <Card  type={props.for} Name={ip} ></Card>
     </div>

     </>
            );}
