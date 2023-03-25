import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState
 } from 'react';
export default function LatencyExposer() {
   const [stamp, setStamp] = useState("")
    const exampleSocket = new WebSocket("ws://localhost:55455");
    exampleSocket.onmessage = (event) => {
        console.log(event.data);
        setStamp(Date.now()-event.data)
      }
      return( 

        <div className="container">
            <p>
            Latency is: {stamp}
            </p>
        </div>
      );
    }